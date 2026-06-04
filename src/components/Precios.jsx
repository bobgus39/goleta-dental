import { motion } from 'framer-motion'
import { CheckCircle, Tag } from 'lucide-react'

const plans = [
  {
    category: 'Revisión y diagnóstico',
    items: [
      { name: 'Primera consulta', price: 'GRATIS', highlight: true },
      { name: 'Radiografía digital', price: 'Desde 15€' },
      { name: 'Limpieza dental profesional', price: 'Desde 60€' },
    ],
    icon: '🦷',
    featured: false,
  },
  {
    category: 'Estética dental',
    items: [
      { name: 'Blanqueamiento LED (clínica)', price: 'Desde 250€', highlight: false },
      { name: 'Composite dental (por pieza)', price: 'Desde 80€' },
      { name: 'Carilla de porcelana', price: 'Desde 350€' },
      { name: 'Diseño de sonrisa completo', price: 'Consultar' },
    ],
    icon: '✨',
    featured: true,
    badge: 'Más solicitado',
  },
  {
    category: 'Ortodoncia',
    items: [
      { name: 'Brackets metálicos', price: 'Desde 1.500€' },
      { name: 'Brackets estéticos/cerámicos', price: 'Desde 2.000€' },
      { name: 'Invisalign (completo)', price: 'Desde 3.200€' },
    ],
    icon: '😁',
    featured: false,
  },
  {
    category: 'Implantes',
    items: [
      { name: 'Implante dental Nobel Biocare', price: 'Desde 900€' },
      { name: 'Corona sobre implante', price: 'Desde 400€' },
      { name: 'Implante + corona completo', price: 'Desde 1.300€' },
    ],
    icon: '🔩',
    featured: false,
    badge: 'Financiación 0%',
    badgeColor: 'bg-green-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Precios() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="precios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-6"
        >
          <span className="section-label">Precios y financiación</span>
          <h2 className="section-title">Transparencia total en precios</h2>
          <p className="section-subtitle mx-auto">
            Precios orientativos. El presupuesto exacto se elabora tras la consulta gratuita.
            Ofrecemos financiación sin intereses en todos los tratamientos.
          </p>
        </motion.div>

        {/* Financing banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 bg-gradient-to-r from-green-50 to-aqua-50 border border-green-100 rounded-2xl px-6 py-4"
        >
          <span className="text-2xl">💳</span>
          <div>
            <p className="font-bold text-navy-700">Financiación sin intereses hasta 24 meses</p>
            <p className="text-gray-500 text-sm">Disponible para todos los tratamientos · Aprobación inmediata</p>
          </div>
          <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">0% TAE</span>
        </motion.div>

        {/* Price cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.category}
              variants={cardVariants}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                plan.featured
                  ? 'shadow-aqua ring-2 ring-aqua-400'
                  : 'shadow-card hover:shadow-card-hover border border-gray-100'
              }`}
            >
              {/* Featured header */}
              {plan.featured && (
                <div className="py-2 text-center text-xs font-bold text-white uppercase tracking-widest"
                  style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                  ⭐ Más solicitado
                </div>
              )}

              {/* Badge (non-featured) */}
              {plan.badge && !plan.featured && (
                <div className={`absolute top-4 right-4 ${plan.badgeColor || 'bg-aqua-400'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}>
                  <Tag size={9} />{plan.badge}
                </div>
              )}

              <div className={`p-6 bg-white h-full`}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{plan.icon}</span>
                  <h3 className="font-display font-bold text-navy-700 text-base leading-tight">{plan.category}</h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {plan.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-start justify-between gap-2 py-2 border-b border-gray-50 last:border-0 ${item.highlight ? 'bg-green-50 -mx-2 px-2 rounded-lg' : ''}`}
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <CheckCircle size={14} className="text-aqua-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-snug">{item.name}</span>
                      </div>
                      <span className={`font-bold text-sm flex-shrink-0 ${
                        item.price === 'GRATIS' ? 'text-green-500' :
                        item.price === 'Consultar' ? 'text-aqua-500' : 'text-navy-700'
                      }`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => scrollTo('cita')}
                  className={`mt-5 w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'text-white hover:opacity-90'
                      : 'text-navy-700 bg-slate-50 hover:bg-aqua-50 border border-gray-200 hover:border-aqua-300'
                  }`}
                  style={plan.featured ? { background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' } : {}}
                >
                  Pedir presupuesto →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-300 mt-8 max-w-2xl mx-auto"
        >
          * Los precios indicados son orientativos y pueden variar según el caso clínico.
          El presupuesto exacto se elabora tras la consulta de diagnóstico gratuita.
          Precios IVA incluido.
        </motion.p>
      </div>
    </section>
  )
}
