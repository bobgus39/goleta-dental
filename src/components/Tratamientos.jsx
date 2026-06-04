import { motion } from 'framer-motion'
import { Sparkles, Smile, Shield, Heart, Droplets, Star, Scissors, Scan } from 'lucide-react'

const treatments = [
  {
    icon: Sparkles,
    name: 'Estética Dental',
    desc: 'Carillas de porcelana, blanqueamiento profesional y composite para una sonrisa perfecta.',
    badge: 'Más popular',
    badgeColor: 'bg-aqua-400',
    color: 'from-aqua-400 to-blue-500',
  },
  {
    icon: Smile,
    name: 'Ortodoncia',
    desc: 'Brackets metálicos, estéticos e Invisalign para alinear tu sonrisa sin compromisos.',
    badge: null,
    color: 'from-navy-500 to-aqua-500',
  },
  {
    icon: Shield,
    name: 'Implantes Dentales',
    desc: 'Solución permanente para dientes perdidos con implantes de titanio de alta gama.',
    badge: 'Financiación 0%',
    badgeColor: 'bg-green-500',
    color: 'from-aqua-500 to-navy-600',
  },
  {
    icon: Heart,
    name: 'Endodoncia',
    desc: 'Tratamiento de conductos con microscopio y técnicas que eliminan el dolor por completo.',
    badge: null,
    color: 'from-navy-600 to-blue-600',
  },
  {
    icon: Droplets,
    name: 'Limpieza y Periodoncia',
    desc: 'Higiene dental profesional y tratamiento de encías para una boca sana y fresca.',
    badge: null,
    color: 'from-blue-400 to-aqua-400',
  },
  {
    icon: Star,
    name: 'Odontología Infantil',
    desc: 'Atención especializada para los más pequeños, con revisiones y selladores de fisuras.',
    badge: null,
    color: 'from-aqua-300 to-blue-400',
  },
  {
    icon: Scissors,
    name: 'Cirugía Oral',
    desc: 'Extracciones, cordales y cirugía periapical con máxima precisión y mínimo postoperatorio.',
    badge: null,
    color: 'from-navy-500 to-navy-700',
  },
  {
    icon: Scan,
    name: 'Radiología Digital',
    desc: 'Radiografías digitales de última generación con hasta un 90% menos de radiación.',
    badge: null,
    color: 'from-aqua-600 to-navy-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Tratamientos() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="tratamientos" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="section-label">Nuestros tratamientos</span>
          <h2 className="section-title">Todo lo que necesita tu sonrisa</h2>
          <p className="section-subtitle mx-auto">
            Desde revisiones preventivas hasta transformaciones completas,
            cubrimos todos los aspectos de tu salud bucodental.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {treatments.map((t) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.name}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-default border border-transparent hover:border-aqua-100"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, ${t.color.includes('aqua-4') ? '#0ECFB4' : '#0F2554'}, ${t.color.includes('blue-5') ? '#3B82F6' : '#0ECFB4'})` }} />

                {/* Badge */}
                {t.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-display font-bold text-navy-700 text-base mb-2 group-hover:text-aqua-500 transition-colors duration-300">
                  {t.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.desc}</p>

                <button
                  onClick={() => scrollTo('cita')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua-500 hover:text-aqua-600 transition-colors group/link"
                >
                  Pedir cita
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-5">¿No encuentras lo que buscas? Consulta con nosotros.</p>
          <button
            onClick={() => scrollTo('cita')}
            className="btn-aqua"
          >
            Primera consulta gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}
