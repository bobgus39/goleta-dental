import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Zap, Award, CreditCard, MapPin, Clock, Shield, Smile } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Sin dolor',
    desc: 'Anestesia de última generación y técnicas mínimamente invasivas para que no sientas nada.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Tecnología 100% digital',
    desc: 'Escáner intraoral, radiología 3D, diseño digital y láser dental para máxima precisión.',
    color: 'from-aqua-400 to-blue-500',
  },
  {
    icon: Award,
    title: 'Equipo especializado',
    desc: 'Cada dentista es especialista en su área con formación continua en los mejores centros europeos.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: CreditCard,
    title: 'Financiación sin intereses',
    desc: 'Fracciona tus tratamientos en hasta 24 meses al 0%. Sonrisa perfecta al alcance de todos.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'En Playa de San Juan',
    desc: 'Ubicación privilegiada en la mejor zona de Alicante. Fácil aparcamiento y transporte.',
    color: 'from-aqua-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Urgencias el mismo día',
    desc: 'Si tienes dolor o necesitas atención urgente, te atendemos ese mismo día sin esperas.',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    icon: Shield,
    title: 'Garantía de tratamientos',
    desc: 'Todos nuestros tratamientos incluyen garantía escrita. Tu inversión está protegida.',
    color: 'from-navy-500 to-navy-700',
  },
  {
    icon: Smile,
    title: 'Primera consulta gratis',
    desc: 'Sin compromiso. Ven a conocernos, cuéntanos qué necesitas y te damos nuestro diagnóstico gratis.',
    color: 'from-aqua-300 to-aqua-500',
  },
]

const stats = [
  { target: 2000, label: 'Pacientes satisfechos', suffix: '+' },
  { target: 15, label: 'Años de experiencia', suffix: '' },
  { target: 98, label: 'Satisfacción', suffix: '%' },
  { target: 5000, label: 'Tratamientos realizados', suffix: '+' },
]

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 2200
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target])

  return (
    <span className="font-display font-black text-3xl md:text-4xl text-gradient-aqua">
      {count.toLocaleString('es-ES')}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function PorQueElegirnos() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="por-que" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="section-label">Por qué elegirnos</span>
          <h2 className="section-title">
            La diferencia que marcan los{' '}
            <span className="text-gradient-aqua">especialistas</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No somos simplemente una clínica dental. Somos tu equipo de confianza
            para cuidar tu sonrisa toda la vida.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-gradient-to-r from-navy-50 via-aqua-50 to-navy-50 border border-aqua-100 rounded-3xl p-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp target={stat.target} suffix={stat.suffix} start={statsVisible} />
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-aqua-200 bg-white hover:bg-aqua-50/30 hover:shadow-card transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-navy-700 text-base mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative overflow-hidden rounded-3xl text-white text-center py-14 px-6"
          style={{ background: 'linear-gradient(135deg, #04102A 0%, #0F2554 50%, #0A5C7A 100%)' }}
        >
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <p className="text-aqua-400 text-sm font-semibold uppercase tracking-widest">Empieza hoy</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              ¿A qué esperas para tener la sonrisa que mereces?
            </h3>
            <p className="text-white/60 text-lg">Primera consulta completamente gratuita. Sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollTo('cita')} className="btn-aqua">
                Reservar consulta gratuita
              </button>
              <a href="tel:+34965000000" className="btn-outline-white">
                📞 965 000 000
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
