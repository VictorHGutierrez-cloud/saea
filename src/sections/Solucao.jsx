import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PHASES, SOLUTION_BENEFITS, fmt } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Solucao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solucao" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-primary">A Solução</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">O Que a Factorial Entrega</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Implementação modular e estratégica em 3 fases, começando pelo que é mais urgente e gerando valor desde o primeiro mês.
          </motion.p>
        </motion.div>

        {/* 3 Phase Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          {PHASES.map((phase) => (
            <motion.div key={phase.id} variants={fadeUp} className="card overflow-hidden group">
              <div className="p-4 text-white text-center font-bold text-lg" style={{ background: phase.color }}>
                {phase.label}: {phase.title}
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">{phase.timing}</span>
                  <p className="text-3xl font-extrabold mt-1" style={{ color: phase.color }}>{fmt(phase.saving)}</p>
                  <p className="text-xs text-stone-500">economia mensal gerada</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  {phase.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 font-bold" style={{ color: phase.color }}>+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  {phase.features.length > 5 && (
                    <li className="text-stone-400 text-xs pl-5">+{phase.features.length - 5} mais funcionalidades</li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.5 }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-brand-primary">Benefícios Principais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTION_BENEFITS.map((b, i) => (
              <div key={i} className="flex items-start group">
                <span className="text-3xl mr-3 mt-0.5 group-hover:scale-110 transition-transform">{b.icon}</span>
                <div>
                  <h4 className="font-semibold text-stone-800 text-sm">{b.title}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
