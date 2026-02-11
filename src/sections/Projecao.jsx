import { useState, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { buildProjection, INVESTMENT, TOTAL_SAVING_MONTHLY, ROI, fmt } from '../data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Projecao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [month, setMonth] = useState(24)
  const { labels, cumInvest, cumSavings } = useMemo(() => buildProjection(), [])

  const net = cumSavings[month] - cumInvest[month]
  const pct = ((month - 1) / 23) * 100

  return (
    <section id="projecao" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-primary">Projeção Financeira</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Economia Acumulada em 24 Meses</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Arraste o controle para ver como a economia cresce mês a mês. O investimento se paga em menos de 9 meses.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="card p-6 md:p-8"
        >
          {/* Slider + Display */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
            <div className="w-full max-w-lg">
              <label className="block text-sm font-medium text-stone-400 mb-2 text-center">Mover para ver a projeção</label>
              <input
                type="range" min={1} max={24} value={month}
                onChange={e => setMonth(+e.target.value)}
                className="w-full slider-brand"
                style={{ '--val': pct + '%' }}
              />
            </div>
            <div className="flex gap-4">
              <div className="rounded-xl p-4 text-center bg-brand-primary/5 border border-brand-primary/20 min-w-[140px]">
                <span className="text-xs text-stone-500 block">Economia Líquida</span>
                <span className="text-lg font-bold text-brand-primary">Mês {month}</span>
                <p className={`text-2xl font-extrabold ${net >= 0 ? 'text-brand-primary' : 'text-brand-danger'}`}>{fmt(net)}</p>
              </div>
              <div className="rounded-xl p-4 text-center bg-amber-50 border border-amber-200 min-w-[140px]">
                <span className="text-xs text-stone-500 block">Investido até</span>
                <span className="text-lg font-bold text-brand-secondary">Mês {month}</span>
                <p className="text-2xl font-extrabold text-brand-secondary">{fmt(cumInvest[month])}</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ height: 380 }}>
            <Line
              data={{
                labels: labels.slice(0, month + 1),
                datasets: [
                  {
                    label: 'Investimento Acumulado',
                    data: cumInvest.slice(0, month + 1),
                    borderColor: '#a1a1aa',
                    backgroundColor: 'rgba(161,161,170,0.08)',
                    fill: true, tension: 0.1, borderWidth: 2.5,
                  },
                  {
                    label: 'Economia Acumulada',
                    data: cumSavings.slice(0, month + 1),
                    borderColor: '#07A2AD',
                    backgroundColor: 'rgba(7,162,173,0.08)',
                    fill: true, tension: 0.2, borderWidth: 2.5,
                  },
                ]
              }}
              options={{
                responsive: true, maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                  tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + fmt(ctx.parsed.y) } },
                  legend: { position: 'top' },
                },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } },
              }}
            />
          </div>

          {/* ROI Formula */}
          <div className="mt-8 p-6 rounded-xl bg-stone-50 border border-stone-200">
            <h4 className="font-bold text-stone-700 mb-4 text-center">Fórmula do ROI (24 meses)</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
              <div className="p-3 bg-white rounded-lg shadow-sm border">
                <p className="text-xs text-stone-500">Economia Total</p>
                <p className="text-xl font-bold text-brand-primary">{fmt(ROI.totalSavings24)}</p>
              </div>
              <span className="text-2xl font-bold text-stone-300">-</span>
              <div className="p-3 bg-white rounded-lg shadow-sm border">
                <p className="text-xs text-stone-500">Investimento Total</p>
                <p className="text-xl font-bold text-stone-700">{fmt(ROI.totalInvest24)}</p>
              </div>
              <span className="text-2xl font-bold text-stone-300">=</span>
              <div className="p-3 bg-white rounded-lg shadow-sm border-2 border-brand-primary">
                <p className="text-xs text-stone-500">Benefício Líquido</p>
                <p className="text-xl font-bold text-brand-primary">{fmt(ROI.net24)}</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-stone-500">
              <strong>ROI = (Economia - Investimento) / Investimento = ({fmt(ROI.totalSavings24)} - {fmt(ROI.totalInvest24)}) / {fmt(ROI.totalInvest24)} = <span className="text-brand-primary font-bold text-base">{ROI.annualROI}%</span></strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
