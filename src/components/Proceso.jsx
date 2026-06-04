import { motion } from 'framer-motion'
import { Calendar, Scan, ClipboardList, Activity, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    number: '01',
    title: 'Primera Consulta',
    subtitle: 'Completamente gratuita',
    desc: 'Nos reunimos contigo para conocer tus preocupaciones, expectativas y objetivos. Sin compromiso y sin coste.',
    badge: 'Gratuita',
    badgeColor: 'bg-green-500',
  },
  {
    icon: Scan,
    number: '02',
    title: 'Diagnóstico Digital',
    subtitle: 'Radiología y escáner 3D',
    desc: 'Realizamos un diagnóstico completo con nuestros equipos de última generación para tener una imagen precisa de tu salud oral.',
    badge: null,
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Plan de Tratamiento',
    subtitle: 'Personalizado y detallado',
    desc: 'Diseñamos un plan de tratamiento a medida con todas las opciones, tiempos estimados, costes y posibilidades de financiación.',
    badge: null,
  },
  {
    icon: Activity,
    number: '04',
    title: 'Tratamiento',
    subtitle: 'Sin dolor, con tecnología',
    desc: 'Ejecutamos el tratamiento con la máxima precisión, utilizando anestesia avanzada y técnicas mínimamente invasivas.',
    badge: null,
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Revisión y Mantenimiento',
    subtitle: 'Tu sonrisa de por vida',
    desc: 'Establecemos un plan de revisiones para asegurar que los resultados se mantienen y tu salud oral está siempre perfecta.',
    badge: null,
  },
]

export default function Proceso() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="proceso" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="section-label">Cómo trabajamos</span>
          <h2 className="section-title">Tu camino hacia la sonrisa perfecta</h2>
          <p className="section-subtitle mx-auto">
            Un proceso claro, transparente y diseñado para que te sientas cómodo en cada etapa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-aqua-400 via-navy-400 to-navy-700 hidden md:block" />

          <div className="space-y-6 md:space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
                >
                  {/* Timeline dot + icon */}
                  <div className="relative flex-shrink-0 flex md:block">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md z-10 md:relative"
                      style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    {/* Step number mobile */}
                    <div className="md:hidden ml-4 flex flex-col justify-center">
                      <span className="font-display font-black text-3xl text-aqua-400 leading-none">{step.number}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-slate-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-aqua-100 hover:shadow-card transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="hidden md:block font-display font-black text-4xl text-aqua-50 group-hover:text-aqua-100 transition-colors absolute -top-2 right-6">
                          {step.number}
                        </span>
                        <h3 className="font-display font-bold text-navy-700 text-lg">{step.title}</h3>
                        <p className="text-aqua-500 text-sm font-medium">{step.subtitle}</p>
                      </div>
                      {step.badge && (
                        <span className={`flex-shrink-0 text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-navy-50 to-aqua-50 border border-aqua-100 rounded-3xl px-8 py-6">
            <div className="text-left">
              <p className="font-display font-bold text-navy-700 text-lg">¿Listo para comenzar?</p>
              <p className="text-gray-500 text-sm">Primera consulta gratuita y sin compromiso</p>
            </div>
            <button
              onClick={() => scrollTo('cita')}
              className="flex-shrink-0 btn-aqua"
            >
              Reservar ahora →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
