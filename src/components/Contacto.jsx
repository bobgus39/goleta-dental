import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Av. Costa Blanca, 12 · Local 3', 'Playa de San Juan, Alicante', '03540, España'],
    link: null,
    color: 'from-aqua-400 to-blue-500',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['965 000 000', 'WhatsApp: 612 000 000'],
    link: 'tel:+34965000000',
    color: 'from-navy-500 to-aqua-500',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@goletadental.es', 'citas@goletadental.es'],
    link: 'mailto:info@goletadental.es',
    color: 'from-aqua-500 to-navy-600',
  },
]

const schedule = [
  { day: 'Lunes – Viernes', hours: '9:00 – 20:00' },
  { day: 'Sábados', hours: '9:00 – 14:00' },
  { day: 'Domingos', hours: 'Cerrado (urgencias: 612 000 000)' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-14"
        >
          <span className="section-label">Cómo encontrarnos</span>
          <h2 className="section-title">Contacto y ubicación</h2>
          <p className="section-subtitle mx-auto">
            Estamos en el corazón de Playa de San Juan. Ven a visitarnos o contacta con nosotros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: contact info + schedule */}
          <div className="space-y-6">
            {/* Contact cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map(({ icon: Icon, title, lines, link, color }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-aqua-50 border border-transparent hover:border-aqua-100 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm mb-1">{title}</p>
                    {lines.map((line, i) => (
                      link && i === 0 ? (
                        <a key={i} href={link} className="block text-gray-500 text-sm hover:text-aqua-500 transition-colors">
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-500 text-sm">{line}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-navy-700">Horario de atención</h3>
              </div>
              <div className="space-y-2">
                {schedule.map(({ day, hours }) => (
                  <div key={day} className="flex items-start justify-between gap-4 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm font-medium">{day}</span>
                    <span className="text-navy-700 text-sm font-semibold text-right">{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-400 text-sm font-medium">Síguenos:</span>
              {[
                { icon: Instagram, label: 'Instagram', color: 'from-pink-400 to-rose-500', href: '#' },
                { icon: Facebook, label: 'Facebook', color: 'from-blue-500 to-blue-600', href: '#' },
              ].map(({ icon: Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300`}
                  aria-label={label}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
              <a
                href="https://wa.me/34612000000"
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-br from-green-400 to-green-600"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-card-hover border border-gray-100"
          >
            <div className="relative">
              <iframe
                title="Ubicación Clínica Goleta Dental - Playa de San Juan, Alicante"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.430%2C38.355%2C-0.395%2C38.375&layer=mapnik&marker=38.365%2C-0.410"
                width="100%"
                height="380"
                className="w-full border-0 block"
                loading="lazy"
                allowFullScreen
              />
              {/* Map overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}>
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-700 text-sm">Clínica Goleta Dental</p>
                  <p className="text-gray-400 text-xs">Av. Costa Blanca, Playa de San Juan · Alicante</p>
                  <a
                    href="https://maps.google.com/?q=Playa+de+San+Juan,+Alicante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aqua-500 text-xs font-medium hover:underline mt-0.5 inline-block"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
