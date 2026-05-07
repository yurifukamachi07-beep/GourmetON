import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-700/96 backdrop-blur-md border-b border-forest-500/30 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="text-gold-300 font-display text-2xl font-semibold tracking-widest uppercase">
            Gourmet<span className="text-parchment-100">On</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-parchment-200 hover:text-gold-300 text-xs font-body font-medium tracking-widest2 uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="border border-gold-400 hover:bg-gold-400 text-gold-300 hover:text-forest-700 text-xs font-medium px-6 py-2.5 tracking-widest uppercase transition-all duration-300"
          >
            Baixar App
          </a>
        </nav>

        <button
          className="md:hidden text-parchment-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-forest-700 border-t border-forest-500/30 px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-parchment-200 hover:text-gold-300 text-xs font-medium tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="border border-gold-400 text-gold-300 text-xs font-medium px-6 py-2.5 text-center tracking-widest uppercase"
          >
            Baixar App
          </a>
        </div>
      )}
    </header>
  )
}
