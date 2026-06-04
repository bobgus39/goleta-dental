import { motion } from 'framer-motion'
import { Scan, Camera, Zap, Monitor, CheckCircle } from 'lucide-react'

const techs = [
  {
    icon: Scan,
    name: 'Radiología Digital 3D',
    desc: 'CBCT de última generación para una visión completa de tu anatomía dental con hasta un 90% menos de radiación que la radiología convencional.',
    points: ['Cone Beam 3D', '90% menos radiación', 'Resultado inmediato'],
    number: '01',
  },
  {
    icon: Camera,
    name: 'Escáner Intraoral',
    desc: 'Tomamos impresiones digitales precisas sin moldes incómodos. En minutos tenemos un modelo 3D exacto de tu boca.',
    points: ['Sin moldes', 'Precisión 0,1 mm', 'Comodidad total'],
    number: '02',
  },
  {
    icon: Zap,
    name: 'Láser Dental',
    desc: 'Tratamientos de tejidos blandos y duros con láser. Menos dolor, menor tiempo de recuperación y resultados superiores.',
    points: ['Mínimo dolor', 'Sin bisturí', 'Cicatrización rápida'],
    number: '03',
  },
  {
    icon: Monitor,
    name: 'Diseño Digital DSD',
    desc: 'Visualiza cómo quedará tu sonrisa antes de empezar. Software de vanguardia para planificar tu transformación en 2D y 3D.',
    points: ['Vista previa real', 'Planificación 3D', 'Resultados predecibles'],
    number: '04',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function Tecnologia() {
  return (
    <section
      id="tecnologia"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #04102A 0%, #0F2554 60%, #0A5C7A 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #0ECFB4 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-400/10 border border-aqua-400/25 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 animate-pulse" />
            Tecnología avanzada
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Equipamiento de{' '}
            <span className="text-gradient-aqua">última generación</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Invertimos continuamente en la mejor tecnología para ofrecerte
            diagnósticos precisos y tratamientos más seguros y confortables.
          </p>
        </motion.div>

        {/* Tech cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {techs.map((tech) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative bg-white/7 backdrop-blur-sm border border-white/12 rounded-2xl p-7 hover:bg-white/12 hover:border-aqua-400/30 transition-all duration-400 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 font-display font-black text-6xl text-white/[0.04] select-none pointer-events-none group-hover:text-aqua-400/[0.08] transition-colors duration-300">
                  {tech.number}
                </span>

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-aqua group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                  >
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-white text-lg mb-2">{tech.name}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{tech.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {tech.points.map((point) => (
                        <span
                          key={point}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-aqua-400 bg-aqua-400/10 border border-aqua-400/20 rounded-full px-3 py-1"
                        >
                          <CheckCircle size={11} />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/7 backdrop-blur-sm border border-white/12 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '100%', label: 'Radiología digital' },
            { value: '3D', label: 'Escáner intraoral' },
            { value: 'ISO', label: 'Certificación calidad' },
            { value: 'DSD', label: 'Diseño digital sonrisa' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-2xl md:text-3xl text-gradient-aqua">{value}</div>
              <div className="text-white/50 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
