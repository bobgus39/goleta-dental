import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'María García',
    treatment: 'Diseño de Sonrisa · Carillas',
    rating: 5,
    text: 'Llevaba años sin sonreír en las fotos por vergüenza de mis dientes. Después del diseño de sonrisa en Goleta Dental, no puedo parar de sonreír. El equipo fue increíblemente cercano y el resultado superó todas mis expectativas.',
    initial: 'MG',
    color: 'from-pink-400 to-rose-500',
    date: 'Marzo 2024',
  },
  {
    name: 'Carlos Martínez',
    treatment: 'Implantes Dentales',
    rating: 5,
    text: 'Me faltan palabras para agradecer el trabajo del Dr. Soler. Perdí un diente hace años y nunca me había animado a poner un implante. El proceso fue mucho más cómodo de lo que pensaba. Ahora ni noto que es un implante.',
    initial: 'CM',
    color: 'from-navy-400 to-navy-600',
    date: 'Enero 2024',
  },
  {
    name: 'Laura Sánchez',
    treatment: 'Ortodoncia Invisalign',
    rating: 5,
    text: 'Empecé Invisalign con 32 años y en 14 meses tengo los dientes perfectamente alineados. La Dra. Cortés estuvo pendiente de mí en todo momento. Lo recomiendo al 100%, el cambio ha sido brutal.',
    initial: 'LS',
    color: 'from-aqua-400 to-teal-500',
    date: 'Febrero 2024',
  },
  {
    name: 'Antonio Pérez',
    treatment: 'Blanqueamiento profesional',
    rating: 5,
    text: 'Tenía los dientes muy amarillos por el café y el tabaco. Hice el blanqueamiento y quedé impresionado. En una sesión el cambio fue brutal. El personal muy amable y el resultado espectacular.',
    initial: 'AP',
    color: 'from-amber-400 to-orange-500',
    date: 'Abril 2024',
  },
  {
    name: 'Isabel Romero',
    treatment: 'Limpieza dental + periodoncia',
    rating: 5,
    text: 'Tenía miedo al dentista desde pequeña y evitaba ir. En Goleta Dental encontré un equipo que entendió mis miedos y me trató con mucha paciencia. Ahora voy cada 6 meses sin problema. ¡Gracias de verdad!',
    initial: 'IR',
    color: 'from-purple-400 to-indigo-500',
    date: 'Mayo 2024',
  },
  {
    name: 'Fernando López',
    treatment: 'Endodoncia urgente',
    rating: 5,
    text: 'Tuve un dolor de muela terrible un sábado y me atendieron el mismo día. La endodoncia no dolió nada y en pocas horas ya estaba sin molestias. Un servicio excepcional, muy profesionales.',
    initial: 'FL',
    color: 'from-green-400 to-emerald-500',
    date: 'Junio 2024',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-base ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = testimonials.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45 } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.35 } }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-14"
        >
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
          <p className="section-subtitle mx-auto">
            Más de 2.000 pacientes han confiado en nosotros. Sus palabras son nuestro mejor aval.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card-hover min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-start gap-7"
              >
                {/* Avatar */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="font-display font-bold text-white text-xl md:text-2xl">{t.initial}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-display font-bold text-navy-700 text-lg">{t.name}</h4>
                      <p className="text-aqua-500 text-sm font-medium">{t.treatment}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <StarRating rating={t.rating} />
                      <span className="text-gray-300 text-xs">{t.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-base italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-aqua-400'
                      : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-aqua-50 hover:border-aqua-300 transition-colors duration-200 shadow-sm"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} className="text-navy-700" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity duration-200 shadow-md"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {testimonials.filter((_, i) => i !== current).slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-card border border-gray-50 cursor-pointer hover:border-aqua-100 hover:shadow-card-hover transition-all duration-300 hidden md:block"
              onClick={() => {
                const idx = testimonials.findIndex(t => t.name === testimonial.name)
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="font-bold text-white text-xs">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-700 text-xs">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-gray-400 text-xs line-clamp-2 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Google reviews badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-6 py-3 shadow-sm">
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <p className="font-bold text-navy-700 text-sm">4,9 / 5 en Google</p>
              <p className="text-gray-400 text-xs">+200 reseñas verificadas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
