import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bar, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js'
import { SAVINGS, INVESTMENT, TOTAL_SAVING_MONTHLY, fmt } from '../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const PHASE_COLORS = { primary: '#07A2AD', secondary: '#FFB940', danger: '#FF355E' }
const DOUGHNUT_COLORS = ['#07A2AD', '#0d9488', '#14b8a6', '#FFB940', '#f59e0b', '#FF355E', '#fb7185']

export default function ROISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="roi" className="bg-white" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-primary">A Matemática</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">ROI Detalhado</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Cada fonte de economia calculada com dados reais das reuniões e estimativas conservadoras do mercado brasileiro.
          </motion.p>
        </motion.div>

        {/* Savings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}
          className="card p-6 md:p-8 mb-10"
        >
          <h3 className="text-xl font-bold mb-6 text-stone-900">Detalhamento das Economias Mensais</h3>
          <div className="space-y-1">
            {/* Header */}
            <div className="hidden sm:flex items-center justify-between p-4 rounded-xl bg-stone-100 text-sm font-semibold text-stone-500">
              <span className="flex-1">Fonte de Economia</span>
              <span className="w-28 text-right">Mensal</span>
              <span className="w-28 text-right">Anual</span>
            </div>

            {SAVINGS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-stone-50 border-l-4 transition-colors"
                style={{ borderColor: PHASE_COLORS[s.color] }}
              >
                <div className="flex-1 mb-2 sm:mb-0">
                  <p className="font-semibold text-stone-800">{s.label}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{s.description}</p>
                </div>
                <span className="w-28 text-right font-bold text-sm sm:text-base" style={{ color: PHASE_COLORS[s.color] }}>
                  {fmt(s.monthly)}<span className="sm:hidden text-stone-400 font-normal"> /mês</span>
                </span>
                <span className="hidden sm:block w-28 text-right font-bold" style={{ color: PHASE_COLORS[s.color] }}>
                  {fmt(s.monthly * 12)}
                </span>
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
              className="flex items-center justify-between p-4 rounded-xl font-bold text-lg mt-3 bg-brand-primary/5 border-2 border-brand-primary"
            >
              <span className="flex-1 text-stone-900">TOTAL DE ECONOMIAS</span>
              <span className="w-28 text-right text-brand-primary">{fmt(TOTAL_SAVING_MONTHLY)}</span>
              <span className="hidden sm:block w-28 text-right text-brand-primary">{fmt(TOTAL_SAVING_MONTHLY * 12)}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="card p-6">
            <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Investimento vs. Economia (Mensal)</h3>
            <div style={{ height: 280 }}>
              <Bar
                data={{
                  labels: ['Investimento\nFactorial', 'Economia\nGerada'],
                  datasets: [{ data: [INVESTMENT.monthly, TOTAL_SAVING_MONTHLY], backgroundColor: ['#a1a1aa', '#07A2AD'], borderRadius: 10, barThickness: 60 }]
                }}
                options={{
                  responsive: true, maintainAspectRatio: false,
                  plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => fmt(ctx.parsed.y) } } },
                  scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } },
                }}
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="card p-6">
            <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Distribuição das Economias</h3>
            <div style={{ height: 280 }}>
              <Doughnut
                data={{
                  labels: SAVINGS.map(s => `${s.label} (${fmt(s.monthly)})`),
                  datasets: [{ data: SAVINGS.map(s => s.monthly), backgroundColor: DOUGHNUT_COLORS, hoverOffset: 8 }]
                }}
                options={{
                  responsive: true, maintainAspectRatio: false,
                  plugins: { legend: { position: 'bottom', labels: { font: { size: 10 }, padding: 8 } }, tooltip: { callbacks: { label: ctx => ctx.label + ' /mês' } } },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
