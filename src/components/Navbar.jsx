import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'solucao', label: 'Solução' },
  { id: 'roi', label: 'ROI' },
  { id: 'projecao', label: 'Projeção' },
  { id: 'modulos', label: 'Módulos' },
  { id: 'cronograma', label: 'Cronograma' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 120) {
          setActive(NAV_ITEMS[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-brand-primary">Factorial</span>
            <span className={`text-lg font-medium transition-colors ${scrolled ? 'text-stone-600' : 'text-white/80'}`}>&</span>
            <span className={`text-lg font-semibold transition-colors ${scrolled ? 'text-stone-700' : 'text-white'}`}>SAEA</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === item.id
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/30'
                    : scrolled
                      ? 'text-stone-600 hover:bg-stone-100'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-white/10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={scrolled ? '#44403c' : 'white'} strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === item.id ? 'bg-brand-primary text-white' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
