import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react'

const footerLinks = {
  tratamientos: [
    'Estética Dental',
    'Ortodoncia · Invisalign',
    'Implantes Dentales',
    'Endodoncia',
    'Limpieza Dental',
    'Odontología Infantil',
    'Cirugía Oral',
    'Diseño de Sonrisa',
  ],
  clinica: [
    { label: 'Sobre Nosotros', id: 'nosotros' },
    { label: 'Tecnología', id: 'tecnologia' },
    { label: 'Cómo trabajamos', id: 'proceso' },
    { label: 'Precios', id: 'precios' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Contacto', id: 'contacto' },
  ],
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #04102A 0%, #0F2554 60%, #0A4060 100%)' }}
    >
      {/* Background dots */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-5">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-aqua group-hover:scale-105 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
              >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M10 1C7 1 4 3 4 7C4 9 4.5 11 5.5 13.5C6.5 16 7 19 7 21C7 21.5 7.5 22 8.5 22C9.5 22 10 20 10 18.5C10 20 10.5 22 11.5 22C12.5 22 13 21.5 13 21C13 19 13.5 16 14.5 13.5C15.5 11 16 9 16 7C16 3 13 1 10 1Z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg">Goleta <span className="text-aqua-400">Dental</span></span>
                <p className="text-white/35 text-[10px] uppercase tracking-widest -mt-0.5">Playa de San Juan</p>
              </div>
            </button>

            <p className="text-white/50 text-sm leading-relaxed">
              Especialistas en estética dental y odontología avanzada en Playa de San Juan, Alicante.
              Más de 15 años transformando sonrisas.
            </p>

            {/* Contact mini */}
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: 'Avinguda Goleta, 25 · Local 8 · Alicante' },
                { icon: Phone, text: '965 000 000', href: 'tel:+34965000000' },
                { icon: Mail, text: 'info@goletadental.es', href: 'mailto:info@goletadental.es' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={13} className="text-aqua-400 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-white/50 text-xs hover:text-aqua-400 transition-colors">{text}</a>
                  ) : (
                    <span className="text-white/50 text-xs">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-pink-500 to-rose-600' },
                { icon: Facebook, href: '#', label: 'Facebook', gradient: 'from-blue-500 to-blue-700' },
              ].map(({ icon: Icon, href, label, gradient }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">Tratamientos</h4>
            <ul className="space-y-2.5">
              {footerLinks.tratamientos.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('tratamientos')}
                    className="text-white/45 text-sm hover:text-aqua-400 transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-aqua-400/50 group-hover:bg-aqua-400 transition-colors" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">La Clínica</h4>
            <ul className="space-y-2.5">
              {footerLinks.clinica.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/45 text-sm hover:text-aqua-400 transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-aqua-400/50 group-hover:bg-aqua-400 transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="space-y-5">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest">¿Listo para empezar?</h4>
            <div className="bg-white/7 border border-white/12 rounded-2xl p-5 space-y-4">
              <p className="text-white/65 text-sm leading-relaxed">
                Primera consulta completamente <strong className="text-aqua-400">gratuita</strong> y sin compromiso.
              </p>
              <button
                onClick={() => scrollTo('cita')}
                className="w-full py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-aqua"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
              >
                Pedir cita gratuita
              </button>
              <a
                href="tel:+34965000000"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium text-white/65 border border-white/15 hover:border-white/35 hover:text-white transition-all duration-300"
              >
                <Phone size={13} /> 965 000 000
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span>🔒</span>
              <span>Datos protegidos · RGPD</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} Clínica Goleta Dental S.L. · Playa de San Juan, Alicante · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-5">
            {['Aviso Legal', 'Política de Privacidad', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#privacidad"
                className="text-white/30 text-xs hover:text-aqua-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-aqua-lg z-40 text-white"
        style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
