import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Tratamientos', href: 'tratamientos' },
  { label: 'Tecnología', href: 'tecnologia' },
  { label: 'Sobre Nosotros', href: 'nosotros' },
  { label: 'Precios', href: 'precios' },
  { label: 'Contacto', href: 'contacto' },
]

function ToothLogo({ scrolled }) {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      className="flex items-center gap-2.5 group"
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
      >
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path
            d="M10 1C7 1 4 3 4 7C4 9 4.5 11 5.5 13.5C6.5 16 7 19 7 21C7 21.5 7.5 22 8.5 22C9.5 22 10 20 10 18.5C10 20 10.5 22 11.5 22C12.5 22 13 21.5 13 21C13 19 13.5 16 14.5 13.5C15.5 11 16 9 16 7C16 3 13 1 10 1Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="leading-none">
        <span className={`font-display font-bold text-lg block transition-colors duration-300 ${scrolled ? 'text-navy-700' : 'text-white'}`}>
          Goleta{' '}
          <span className="text-aqua-400">Dental</span>
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
          Playa de San Juan
        </span>
      </div>
    </a>
  )
}

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const scrollTo = (id) => {
    setIsMenuOpen(false)
    // Espera a que el overlay termine de cerrar antes de hacer scroll
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <Navbar
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
        maxWidth="xl"
        height="72px"
      >
        {/* Left: Hamburger (mobile only) + Brand */}
        <NavbarContent justify="start">
          <button
            className={`sm:hidden p-2 -ml-1 rounded-xl transition-all duration-200 flex-shrink-0 ${
              isScrolled || isMenuOpen
                ? 'text-navy-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/15'
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen
              ? <X size={22} strokeWidth={2.5} />
              : <Menu size={22} strokeWidth={2.5} />
            }
          </button>
          <NavbarBrand>
            <ToothLogo scrolled={isScrolled || isMenuOpen} />
          </NavbarBrand>
        </NavbarContent>

        {/* Center: Desktop links */}
        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          {navLinks.map((link) => (
            <NavbarItem key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-white/10 group ${
                  isScrolled ? 'text-navy-600 hover:text-aqua-400' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 w-0 h-0.5 bg-aqua-400 rounded-full group-hover:w-[calc(100%-24px)] transition-all duration-300" />
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Right: CTA */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              size="sm"
              className="text-white font-semibold shadow-aqua hover:scale-105 transition-all duration-300"
              radius="full"
              style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
              onPress={() => scrollTo('cita')}
            >
              Pedir Cita
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Mobile menu overlay — fuera del Navbar para evitar que HeroUI interfiera */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px', backgroundColor: '#ffffff' }}
      >
        <nav className="h-full overflow-y-auto px-5 pt-4 pb-16 flex flex-col">
          {/* Links */}
          <div className="flex-1">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                className="w-full text-left py-4 flex items-center gap-4 border-b border-gray-100 hover:text-aqua-400 transition-colors duration-200 group"
                onClick={() => scrollTo(link.href)}
              >
                <span className="text-aqua-400 font-bold text-sm w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-navy-700 font-medium text-lg group-hover:text-aqua-400 transition-colors">
                  {link.label}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="pt-8 space-y-3">
            <button
              onClick={() => scrollTo('cita')}
              className="w-full py-4 rounded-full text-white font-bold text-base shadow-aqua"
              style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
            >
              Pedir Cita Gratuita →
            </button>
            <a
              href="tel:+34965000000"
              className="w-full py-3 rounded-full border-2 border-gray-200 text-navy-700 font-medium text-sm flex items-center justify-center gap-2 hover:border-aqua-300 transition-colors"
            >
              <Phone size={15} className="text-aqua-400" />
              965 000 000
            </a>
          </div>
        </nav>
      </div>

      {/* Backdrop semitransparente detrás del menú */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 sm:hidden"
          style={{ top: '72px', backgroundColor: 'rgba(15,37,84,0.3)' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
