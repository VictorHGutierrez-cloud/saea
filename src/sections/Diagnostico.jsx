import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js'
import { PAIN_POINTS, VOLUME_DATA } from '../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Diagnostico() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="diagnostico" className="bg-white" ref={ref}>
      <div className="section-wrapper">
        <motion.div className="text-center mb-12" initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ staggerChildren: 0.1 }}>
          <motion.span variants={fadeUp} className="section-label text-brand-danger">Diagnóstico</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Onde Colégio Mendel e SAEA Estavam</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Dados reais extraídos das reuniões com a equipe de RH. Todos os processos eram 100% manuais.
          </motion.p>
        </motion.div>

        {/* Big Impact Numbers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
        >
          {[
            { value: VOLUME_DATA.highVolume.values[0].toLocaleString('pt-BR'), label: 'Currículos recebidos', sub: 'em apenas 7 dias, triados um a um' },
            { value: `${VOLUME_DATA.processData.values[0]} meses`, label: 'Tempo médio para fechar vaga', sub: 'meta com Factorial: 45 dias' },
            { value: VOLUME_DATA.highVolume.values[1].toLocaleString('pt-BR'), label: 'E-mails por dia', sub: 'com currículos, sem filtros' },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="card p-6 text-center border-t-4 border-stone-700">
              <p className="text-4xl md:text-5xl font-extrabold text-stone-800">{item.value}</p>
              <p className="text-stone-700 font-semibold mt-2">{item.label}</p>
              <p className="text-sm text-stone-500">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.08, delayChildren: 0.4 }}
        >
          {PAIN_POINTS.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-start p-5 rounded-xl bg-stone-50 border border-stone-200 hover:shadow-sm transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-700 text-white flex items-center justify-center font-bold text-sm mr-4">
                {p.icon}
              </div>
              <div>
                <h4 className="font-bold text-stone-800">{p.title}</h4>
                <p className="text-sm text-stone-500 mt-1 italic">{p.quote}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Volume Charts - Separados por escala */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfico de Volume Alto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.5 }}
            className="card p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Volume de Trabalho Manual</h3>
            <div className="relative w-full" style={{ height: 280 }}>
              <Bar
                data={{
                  labels: VOLUME_DATA.highVolume.labels,
                  datasets: [{
                    label: 'Volume',
                    data: VOLUME_DATA.highVolume.values,
                    backgroundColor: '#64748b',
                    borderRadius: 6,
                    barThickness: 50,
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y.toLocaleString('pt-BR')} ${VOLUME_DATA.highVolume.units[ctx.dataIndex]}` } },
                  },
                  scales: {
                    y: { beginAtZero: true, ticks: { callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v } },
                    x: { ticks: { font: { size: 10 } } },
                  },
                }}
              />
            </div>
          </motion.div>

          {/* Gráfico de Processos e Tempo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.5 }}
            className="card p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-center mb-6 text-stone-900">Processos e Tempo</h3>
            <div className="relative w-full" style={{ height: 280 }}>
              <Bar
                data={{
                  labels: VOLUME_DATA.processData.labels,
                  datasets: [{
                    label: 'Processo',
                    data: VOLUME_DATA.processData.values,
                    backgroundColor: '#475569',
                    borderRadius: 6,
                    barThickness: 50,
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: (ctx) => `${ctx.parsed.y.toLocaleString('pt-BR')} ${VOLUME_DATA.processData.units[ctx.dataIndex]}` } },
                  },
                  scales: {
                    y: { beginAtZero: true, ticks: { callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v } },
                    x: { ticks: { font: { size: 10 } } },
                  },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
