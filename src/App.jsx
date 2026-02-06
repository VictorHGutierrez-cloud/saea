import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Diagnostico from './sections/Diagnostico'
import Solucao from './sections/Solucao'
import ROISection from './sections/ROISection'
import Projecao from './sections/Projecao'
import Modulos from './sections/Modulos'
import Cronograma from './sections/Cronograma'
import Decisao from './sections/Decisao'

export default function App() {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Diagnostico />
        <Solucao />
        <ROISection />
        <Projecao />
        <Modulos />
        <Cronograma />
        <Decisao />
      </main>
      <footer className="text-center py-10 border-t border-stone-200">
        <p className="text-sm text-stone-400">Grupo SAEA x Factorial RH | Proposta Completa</p>
        <p className="text-xs text-stone-300 mt-1">Estimativas baseadas em dados reais das reuniões e benchmarks do mercado brasileiro.</p>
      </footer>
    </div>
  )
}
