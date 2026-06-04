import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@heroui/react'
import { Sparkles, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

function StatBadge({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display font-bold text-xl md:text-2xl text-aqua-400">{number}</span>
      <span className="text-white/55 text-xs md:text-sm">{label}</span>
    </div>
  )
}

function FloatingCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute hidden xl:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #04102A 0%, #0F2554 45%, #1B3A8F 80%, #0A5C7A 100%)' }}
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none select-none">
        {/* Radial glow blobs */}
        <div
          className="absolute top-16 right-0 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #0ECFB4 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-[-100px] w-[450px] h-[450px] rounded-full opacity-[0.1]"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 65%)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 60px)',
          }}
        />
      </motion.div>

      {/* Floating info cards */}
      <FloatingCard className="top-36 right-10 lg:right-20" delay={1.2}>
        <div className="w-9 h-9 rounded-xl bg-aqua-400/20 flex items-center justify-center">
          <Sparkles size={18} className="text-aqua-400" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Diseño Digital</p>
          <p className="text-white/55 text-xs">Sonrisa perfecta 3D</p>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-44 right-12 lg:right-24" delay={1.4}>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">98% satisfacción</p>
          <p className="text-white/55 text-xs">+2.000 pacientes</p>
        </div>
      </FloatingCard>

      <FloatingCard className="top-48 left-8 lg:left-16" delay={1.6}>
        <div className="w-9 h-9 rounded-xl bg-green-400/20 flex items-center justify-center">
          <span className="text-green-400 text-lg">✓</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Sin dolor</p>
          <p className="text-white/55 text-xs">Odontología avanzada</p>
        </div>
      </FloatingCard>

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left column: text */}
          <div className="flex-1 text-center lg:text-left space-y-7 max-w-2xl mx-auto lg:mx-0">
            <motion.div {...fadeUp(0.05)} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-400/10 border border-aqua-400/25 rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 animate-pulse" />
                Clínica en Playa de San Juan, Alicante
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight"
            >
              Tu sonrisa
              <br />
              <span className="text-gradient-aqua">perfecta</span>
              <br />
              empieza aquí.
            </motion.h1>

            <motion.p
              {...fadeUp(0.28)}
              className="text-lg md:text-xl text-white/65 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Especialistas en estética dental, ortodoncia e implantes.
              Tecnología de última generación, sin dolor y con resultados que transforman tu vida.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-white font-bold text-base shadow-aqua-lg hover:shadow-aqua hover:scale-105 transition-all duration-300 px-8"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                radius="full"
                onPress={() => scrollTo('cita')}
                endContent={<ArrowRight size={18} />}
              >
                Pedir Cita Gratuita
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300 px-8"
                radius="full"
                onPress={() => scrollTo('tratamientos')}
              >
                Ver Tratamientos
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.52)}
              className="flex items-center justify-center lg:justify-start gap-8 pt-2"
            >
              <StatBadge number="+2.000" label="Pacientes felices" />
              <div className="w-px h-10 bg-white/15" />
              <StatBadge number="15 años" label="De experiencia" />
              <div className="w-px h-10 bg-white/15" />
              <StatBadge number="98%" label="Satisfacción" />
            </motion.div>
          </div>

          {/* Right column: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex flex-shrink-0 justify-center items-center"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-8 rounded-[40px] blur-3xl opacity-25"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
              />
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 w-72 xl:w-80 shadow-2xl">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-aqua animate-float"
                    style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                  >
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none">
                      <path
                        d="M22 3C16 3 10 7 10 14C10 18 11 22 13 26C15 30 16 35 16 40C16 43.5 17.5 47 20.5 47C22.5 47 23.5 44 23.5 41C23.5 44 24.5 47 26.5 47C29.5 47 31 43.5 31 40C31 35 32 30 34 26C36 22 37 18 37 14C37 7 31 3 22 3Z"
                        fill="white"
                        opacity="0.95"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-center text-xl mb-1.5">
                  Diseño de Sonrisa
                </h3>
                <p className="text-white/55 text-center text-sm mb-6 leading-relaxed">
                  Planificación digital 3D para resultados precisos y naturales
                </p>

                <div className="space-y-3 mb-6">
                  {['Diagnóstico digital completo', 'Planificación 3D personalizada', 'Resultado garantizado'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                        <span className="text-white text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo('diseno-sonrisa')}
                  className="w-full py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                >
                  Descubrir →
                </button>
              </div>

              {/* Extra badge below card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-white font-semibold text-sm">Primera consulta</p>
                  <p className="text-aqua-400 text-xs font-bold">100% GRATUITA</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo('nosotros')}
        aria-label="Ir a la siguiente sección"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">Explorar</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5 group-hover:border-white/50 transition-colors"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full group-hover:bg-aqua-400 transition-colors" />
        </motion.div>
      </motion.button>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
