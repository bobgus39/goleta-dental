import { motion } from 'framer-motion'
import { MapPin, Award, Heart, Users } from 'lucide-react'

const values = [
  { icon: Heart, label: 'Sin dolor', desc: 'Técnicas de anestesia avanzadas para una experiencia cómoda' },
  { icon: Award, label: 'Especialistas', desc: 'Equipo de dentistas con formación continua y años de experiencia' },
  { icon: Users, label: 'Trato cercano', desc: 'Te acompañamos en cada paso con atención personalizada' },
  { icon: MapPin, label: 'Playa de San Juan', desc: 'Tu clínica de confianza en el corazón de la playa' },
]

const team = [
  { initial: 'DM', name: 'Dr. Miguel Ángel Soler', role: 'Director Clínico · Implantología', color: 'from-aqua-400 to-blue-500' },
  { initial: 'LC', name: 'Dra. Laura Cortés', role: 'Ortodoncia · Invisalign', color: 'from-navy-600 to-aqua-500' },
  { initial: 'JR', name: 'Dr. Javier Roca', role: 'Estética Dental · DSD', color: 'from-aqua-500 to-navy-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main visual block */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[500px]"
              style={{ background: 'linear-gradient(135deg, #04102A 0%, #0F2554 50%, #0A5C7A 100%)' }}>
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="absolute top-12 right-12 w-48 h-48 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #0ECFB4, transparent)' }} />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 gap-4">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-aqua-lg mb-2"
                  style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                  <svg width="52" height="56" viewBox="0 0 44 48" fill="none">
                    <path d="M22 3C16 3 10 7 10 14C10 18 11 22 13 26C15 30 16 35 16 40C16 43.5 17.5 47 20.5 47C22.5 47 23.5 44 23.5 41C23.5 44 24.5 47 26.5 47C29.5 47 31 43.5 31 40C31 35 32 30 34 26C36 22 37 18 37 14C37 7 31 3 22 3Z" fill="white" opacity="0.95" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-2xl">Goleta Dental</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  Más de 15 años transformando sonrisas en Playa de San Juan, Alicante
                </p>
                <div className="flex gap-6 mt-2">
                  {[['2009', 'Fundación'], ['100%', 'Digital'], ['+2K', 'Pacientes']].map(([n, l]) => (
                    <div key={l} className="text-center">
                      <div className="font-display font-bold text-aqua-400 text-xl">{n}</div>
                      <div className="text-white/50 text-xs">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3">
                <MapPin size={18} className="text-aqua-400 flex-shrink-0" />
                <span className="text-white/80 text-sm">Avinguda Goleta, 25 · Local 8 · 03540 Alicante</span>
              </div>
            </div>

            {/* Floating award card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3 w-52"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                <Award size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-navy-700 text-sm">Clínica acreditada</p>
                <p className="text-gray-400 text-xs">ISO 9001:2015</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="section-label">Sobre nosotros</span>
            <h2 className="section-title">
              Cuidamos tu sonrisa desde{' '}
              <span className="text-gradient-aqua">2009</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Somos una clínica dental familiar ubicada en el corazón de Playa de San Juan, Alicante.
              Desde el primer día nos comprometemos a ofrecerte la mejor atención odontológica
              con la tecnología más avanzada disponible.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Nuestra filosofía es simple: <strong className="text-navy-700">tu bienestar primero</strong>.
              Cada tratamiento se diseña a medida para ti, combinando precisión técnica con
              la calidez de un trato cercano y personalizado. Aquí no hay miedo al dentista.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-aqua-50 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">{label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="section-label">Nuestro equipo</span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-navy-700 mt-3">
              Especialistas comprometidos con tu salud
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="card-base p-6 text-center group cursor-default"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <span className="font-display font-bold text-white text-2xl">{member.initial}</span>
                  </div>
                </div>
                <h4 className="font-display font-bold text-navy-700 text-base">{member.name}</h4>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                <div className="mt-3 flex justify-center gap-0.5">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
