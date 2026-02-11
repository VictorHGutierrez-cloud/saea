import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { TIMELINE, buildProjection, fmt } from '../data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Cronograma() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { labels, cumInvest, cumSavings } = buildProjection()

  return (
    <section id="cronograma" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-primary">Linha do Tempo</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Quando o Investimento se Paga</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            A partir do mês 9, cada real investido já gerou retorno. Depois disso, é benefício líquido crescente.
          </motion.p>
        </motion.div>

        {/* Payback Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="card p-6 md:p-8 mb-12"
        >
          <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Investimento Acumulado vs. Economia Acumulada</h3>
          <div style={{ height: 380 }}>
            <Line
              data={{
                labels,
                datasets: [
                  {
                    label: 'Investimento Acumulado',
                    data: cumInvest,
                    borderColor: '#FF355E',
                    backgroundColor: 'rgba(255,53,94,0.04)',
                    fill: true, tension: 0.1, borderWidth: 2.5, borderDash: [6, 4],
                  },
                  {
                    label: 'Economia Acumulada',
                    data: cumSavings,
                    borderColor: '#07A2AD',
                    backgroundColor: 'rgba(7,162,173,0.08)',
                    fill: true, tension: 0.3, borderWidth: 3,
                  },
                ]
              }}
              options={{
                responsive: true, maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: ctx => ctx.dataset.label + ': ' + fmt(ctx.parsed.y),
                      afterBody: items => {
                        if (items.length >= 2) {
                          const diff = items[1].parsed.y - items[0].parsed.y
                          return diff >= 0 ? `\nBenefício líquido: ${fmt(diff)}` : `\nFalta para payback: ${fmt(Math.abs(diff))}`
                        }
                        return ''
                      }
                    }
                  },
                  legend: { position: 'top' },
                },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } },
              }}
            />
          </div>
          <p className="text-center text-sm text-stone-500 mt-4">O ponto de cruzamento (payback) ocorre entre o mês 8 e o mês 9.</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
          className="card p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-10 text-stone-900">Marcos de Implementação e Valor</h3>
          <ol className="relative border-l-2 border-stone-200 ml-4">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="mb-10 ml-8 last:mb-0"
              >
                <div
                  className="absolute -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ring-4 ring-white"
                  style={{
                    background: item.isPayback
                      ? 'linear-gradient(135deg, #07A2AD, #FFB940)'
                      : item.isFinal
                        ? 'linear-gradient(135deg, #07A2AD, #05c4d0)'
                        : item.color
                  }}
                >
                  {item.isPayback ? 'P' : item.month}
                </div>
                <h3 className={`text-lg font-bold ${item.isPayback ? 'text-brand-primary' : 'text-stone-900'}`}>
                  {item.title}
                </h3>
                <time className="block text-sm text-stone-500 mb-1">Mês {item.month}</time>
                <p className="text-stone-600 text-sm">{item.desc}</p>
                {item.badge && (
                  <span
                    className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: item.isFinal
                        ? 'linear-gradient(135deg, #07A2AD, #05c4d0)'
                        : item.color
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
