import { motion } from 'framer-motion'
import { CLIENT, INVESTMENT, TOTAL_SAVING_MONTHLY, ROI, fmt } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-[#068a93] to-[#034e54]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMyAwIDYgMi43IDYgNnMtMi43IDYtNiA2LTYtMi43LTYtNiAyLjctNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative section-wrapper w-full">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-brand-secondary font-semibold text-sm tracking-[0.25em] uppercase mb-4">
            Retorno sobre Investimento
          </motion.p>

          <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Análise de ROI
            <span className="block text-brand-secondary mt-2">Colégio Agostiniano</span>
          </motion.h1>

          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
            {CLIENT.fullName} — {CLIENT.employees.toLocaleString('pt-BR')} colaboradores, {CLIENT.cnpjs} CNPJs, processos 100% manuais transformados em operação digital.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <StatCard label="Investimento Mensal" value={fmt(INVESTMENT.monthly)} sub={`desconto de ${INVESTMENT.discount} aplicado`} />
            <StatCard label="Economia Mensal" value={fmt(TOTAL_SAVING_MONTHLY)} sub="em processos automatizados" highlight />
            <StatCard label="ROI Anual" value={`${ROI.annualROI}%`} sub="retorno sobre investimento" />
            <StatCard label="Payback" value={`${ROI.paybackMonths} meses`} sub="para retorno total" />
          </motion.div>

          {/* Bottom highlight */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-white/60 text-sm">Benefício Líquido/Mês</p>
                <p className="text-2xl font-extrabold text-white">{fmt(ROI.netMonthly)}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Economia em 12 Meses</p>
                <p className="text-2xl font-extrabold text-brand-secondary">{fmt(ROI.net12)}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Economia em 24 Meses</p>
                <p className="text-2xl font-extrabold text-brand-secondary">{fmt(ROI.net24)}</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12"
          >
            <svg className="w-6 h-6 mx-auto text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ label, value, sub, highlight }) {
  return (
    <div className={`rounded-xl p-4 text-center ${highlight ? 'bg-brand-secondary/20 border border-brand-secondary/30' : 'bg-white/10 border border-white/10'}`}>
      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{label}</p>
      <p className={`text-2xl md:text-3xl font-extrabold mt-1 ${highlight ? 'text-brand-secondary' : 'text-white'}`}>{value}</p>
      <p className="text-white/40 text-xs mt-1">{sub}</p>
    </div>
  )
}
