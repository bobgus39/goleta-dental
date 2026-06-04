import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Monitor, Camera, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Camera, title: 'Fotografía y vídeo', desc: 'Documentación completa de tu sonrisa actual desde todos los ángulos.' },
  { icon: Monitor, title: 'Diseño digital 2D/3D', desc: 'Creamos el diseño de tu nueva sonrisa con software especializado.' },
  { icon: Sparkles, title: 'Simulación y aprobación', desc: 'Ves el resultado antes de empezar y aprobamos juntos cada detalle.' },
  { icon: CheckCircle, title: 'Ejecución perfecta', desc: 'Fabricamos y colocamos las restauraciones con precisión milimétrica.' },
]

const cases = [
  { label: 'Carillas de porcelana', improvement: 'Sonrisa natural y uniforme' },
  { label: 'Blanqueamiento + composite', improvement: 'Sonrisa más blanca y armónica' },
  { label: 'Ortodoncia + blanqueamiento', improvement: 'Alineación perfecta y color ideal' },
]

const GRADIENTS_BEFORE = [
  'from-gray-200 to-gray-400',
  'from-slate-200 to-slate-400',
  'from-zinc-200 to-zinc-400',
]
const GRADIENTS_AFTER = [
  'from-aqua-300 to-blue-500',
  'from-aqua-400 to-teal-500',
  'from-blue-400 to-aqua-500',
]

function BeforeAfterCard({ caseItem, index }) {
  const [sliderPct, setSliderPct] = useState(50)
  const containerRef = useRef(null)

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setSliderPct(pct)
  }, [])

  const handleMouseMove = useCallback((e) => {
    updateSlider(e.clientX)
  }, [updateSlider])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    updateSlider(e.touches[0].clientX)
  }, [updateSlider])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Comparison area */}
      <div
        ref={containerRef}
        className="relative h-48 overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
      >
        {/* BEFORE panel — full width, sits behind */}
        <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS_BEFORE[index]}`}>
          {/* Content anchored to left quarter so it stays visible in "before" side */}
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: '25%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-5xl drop-shadow">😐</span>
            <span className="text-white/85 text-xs font-semibold drop-shadow">Antes</span>
          </div>
        </div>

        {/* AFTER panel — clipped from left by sliderPct */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS_AFTER[index]}`}
          style={{ clipPath: `inset(0 0 0 ${sliderPct}%)` }}
        >
          {/* Content anchored to right quarter */}
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: '75%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-5xl drop-shadow">😁</span>
            <span className="text-white text-xs font-semibold drop-shadow">Después</span>
          </div>
        </div>

        {/* ANTES / DESPUÉS corner labels */}
        <span className="absolute top-3 left-3 z-20 text-[10px] font-bold text-white bg-black/35 backdrop-blur-sm rounded-full px-2.5 py-1 pointer-events-none">
          ANTES
        </span>
        <span className="absolute top-3 right-3 z-20 text-[10px] font-bold text-white rounded-full px-2.5 py-1 pointer-events-none"
          style={{ background: 'rgba(14,207,180,0.65)', backdropFilter: 'blur(4px)' }}>
          DESPUÉS
        </span>

        {/* Slider handle — follows cursor */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${sliderPct}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
          {/* Handle button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M1 7H19M1 7L5 3M1 7L5 11M19 7L15 3M19 7L15 11" stroke="#0F2554" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Hint text — fades on hover */}
        <p className="absolute bottom-2 inset-x-0 text-center text-white/40 text-[10px] font-medium pointer-events-none z-20">
          ← desliza para comparar →
        </p>
      </div>

      {/* Card info */}
      <div className="p-5">
        <h4 className="font-display font-bold text-navy-700 text-sm mb-1">{caseItem.label}</h4>
        <p className="text-aqua-500 text-xs font-medium flex items-center gap-1">
          <Sparkles size={11} /> {caseItem.improvement}
        </p>
      </div>
    </motion.div>
  )
}

export default function DisenoSonrisa() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="diseno-sonrisa" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="section-label">
            <Sparkles size={12} />
            Servicio estrella
          </span>
          <h2 className="section-title">
            Diseño Digital de Sonrisa{' '}
            <span className="text-gradient-aqua">(DSD)</span>
          </h2>
          <p className="section-subtitle mx-auto">
            La técnica más avanzada para planificar y ejecutar tu transformación completa.
            Ve el resultado antes de empezar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: info */}
          <div className="space-y-8">
            {/* What is it */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-white rounded-2xl p-7 shadow-card"
            >
              <h3 className="font-display font-bold text-navy-700 text-xl mb-3">¿Qué es el DSD?</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                El Diseño Digital de Sonrisa (DSD) es un protocolo de planificación estética
                que utiliza software específico para crear el diseño ideal de tu sonrisa
                teniendo en cuenta la armonía facial, la proporción dental y tus preferencias personales.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Antes de realizar cualquier tratamiento, <strong className="text-navy-700">verás exactamente el resultado final</strong>.
                Sin sorpresas. Sin riesgos. Con total seguridad y confianza.
              </p>
            </motion.div>

            {/* Process steps */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h3 className="font-display font-bold text-navy-700 text-xl mb-5">El proceso en 4 pasos</h3>
              <div className="space-y-4">
                {steps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div key={step.title} className="flex items-start gap-4 group">
                      <div className="relative flex-shrink-0">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                          style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                          <Icon size={20} className="text-white" />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="absolute left-1/2 top-11 w-0.5 h-4 bg-aqua-100 -translate-x-1/2" />
                        )}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-navy-700 text-sm">{step.title}</h4>
                        <p className="text-gray-400 text-sm mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <button
                onClick={() => scrollTo('cita')}
                className="btn-aqua inline-flex items-center gap-2"
              >
                Solicitar diseño de sonrisa <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right: before/after gallery */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-display font-bold text-navy-700 text-xl mb-6"
            >
              Casos reales — pasa el cursor para ver el antes y después
            </motion.h3>

            <div className="space-y-5">
              {cases.map((c, i) => (
                <BeforeAfterCard key={c.label} caseItem={c} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-5 bg-aqua-50 border border-aqua-100 rounded-2xl p-5 flex items-start gap-4"
            >
              <Sparkles className="text-aqua-400 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-navy-700 text-sm">Resultado garantizado</p>
                <p className="text-gray-500 text-sm mt-0.5">
                  Trabajamos hasta que la sonrisa coincida exactamente con el diseño aprobado.
                  Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
