import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { PHASES, fmt } from '../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Modulos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="modulos" className="bg-white" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-primary">Módulos Contratados</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">O Que Cada Módulo Entrega</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Cada fase gera valor mensurável. O recrutamento sozinho já justifica 97% do investimento.
          </motion.p>
        </motion.div>

        {/* Module Detail Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          {PHASES.map((phase) => (
            <motion.div key={phase.id} variants={fadeUp} className="card overflow-hidden">
              <div className="p-5 text-white text-center" style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)` }}>
                <p className="text-sm font-medium opacity-80">{phase.label} | {phase.timing}</p>
                <p className="text-lg font-bold mt-1">{phase.title}</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-5 pb-5 border-b border-stone-100">
                  <p className="text-3xl font-extrabold" style={{ color: phase.color }}>{fmt(phase.saving)}</p>
                  <p className="text-xs text-stone-500 mt-1">economia mensal gerada</p>
                </div>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {phase.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={phase.color} strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-3 rounded-lg text-xs text-stone-600" style={{ backgroundColor: phase.color + '10' }}>
                  <strong>Economias:</strong> {phase.savingsNote}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
          className="card p-6 md:p-8"
        >
          <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Contribuição de Cada Fase para o ROI</h3>
          <div style={{ height: 260 }}>
            <Bar
              data={{
                labels: PHASES.map(p => `${p.label}: ${p.title}`),
                datasets: [{ data: PHASES.map(p => p.saving), backgroundColor: PHASES.map(p => p.color), borderRadius: 10, barThickness: 40 }]
              }}
              options={{
                responsive: true, maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => fmt(ctx.parsed.x) + ' /mês' } } },
                scales: { x: { beginAtZero: true, ticks: { callback: v => fmt(v) } } },
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
