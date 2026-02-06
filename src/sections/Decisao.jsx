import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { INVESTMENT, TOTAL_SAVING_MONTHLY, ROI, CLIENT, fmt } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Decisao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="decisao" ref={ref}>
      <div className="section-wrapper">
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.12 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-[#068a93] to-[#034e54]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Decisão Baseada em Números
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Com {CLIENT.employees.toLocaleString('pt-BR')} colaboradores e processos 100% manuais, cada mês sem automação custa mais do que o investimento na Factorial.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-white/60 text-sm mb-1">Custo dos processos manuais</p>
                <p className="text-3xl font-extrabold text-white">{fmt(TOTAL_SAVING_MONTHLY)}</p>
                <p className="text-white/40 text-xs mt-1">por mês</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-white/60 text-sm mb-1">Investimento Factorial</p>
                <p className="text-3xl font-extrabold text-white">{fmt(INVESTMENT.monthly)}</p>
                <p className="text-white/40 text-xs mt-1">por mês</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-stone-500 text-sm mb-1">Economia líquida</p>
                <p className="text-3xl font-extrabold text-brand-primary">{fmt(ROI.netMonthly)}</p>
                <p className="text-stone-400 text-xs mt-1">por mês</p>
              </div>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-white/50 text-sm">ROI Anual</p>
                <p className="text-2xl font-extrabold text-brand-secondary">{ROI.annualROI}%</p>
              </div>
              <div>
                <p className="text-white/50 text-sm">Payback</p>
                <p className="text-2xl font-extrabold text-brand-secondary">{ROI.paybackMonths} meses</p>
              </div>
              <div>
                <p className="text-white/50 text-sm">Economia em 24 meses</p>
                <p className="text-2xl font-extrabold text-brand-secondary">{fmt(ROI.net24)}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
