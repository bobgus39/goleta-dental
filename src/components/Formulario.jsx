import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input, Textarea, Button } from '@heroui/react'
import { submitAppointment } from '../services/api.js'
import { CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'

const treatmentOptions = [
  { key: 'estetica', label: 'Estética dental (carillas, blanqueamiento)' },
  { key: 'ortodoncia', label: 'Ortodoncia (brackets, Invisalign)' },
  { key: 'implantes', label: 'Implantes dentales' },
  { key: 'endodoncia', label: 'Endodoncia' },
  { key: 'limpieza', label: 'Limpieza dental y periodoncia' },
  { key: 'infantil', label: 'Odontología infantil' },
  { key: 'cirugia', label: 'Cirugía oral' },
  { key: 'radiologia', label: 'Radiología digital' },
  { key: 'diseno-sonrisa', label: 'Diseño digital de sonrisa (DSD)' },
  { key: 'revision', label: 'Revisión general / primera consulta' },
]

const initialForm = {
  nombre: '',
  telefono: '',
  email: '',
  tratamiento: new Set([]),
  fecha: '',
  mensaje: '',
}

function validate(form) {
  const errors = {}
  if (!form.nombre.trim() || form.nombre.trim().length < 2)
    errors.nombre = 'Introduce tu nombre completo'
  if (!form.telefono.trim() || !/^[\d\s\+\-]{9,15}$/.test(form.telefono.trim()))
    errors.telefono = 'Introduce un teléfono válido'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Introduce un email válido'
  if (!form.tratamiento || form.tratamiento.size === 0)
    errors.tratamiento = 'Selecciona un tratamiento'
  return errors
}

/** Wrapper que coloca un <label> nativo encima del campo HeroUI */
function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-navy-700 select-none">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1 mt-0.5">
          <AlertCircle size={11} className="flex-shrink-0" />{error}
        </p>
      )}
    </div>
  )
}

const inputStyles = {
  inputWrapper: [
    'border-gray-200',
    'hover:border-aqua-300',
    'data-[focus=true]:border-aqua-400',
    'data-[invalid=true]:border-red-400',
  ].join(' '),
}

export default function Formulario() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const handleField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }

    setIsSubmitting(true)
    setServerError('')

    const tratamientoKey = [...form.tratamiento][0]
    const tratamientoLabel = treatmentOptions.find((t) => t.key === tratamientoKey)?.label || tratamientoKey

    try {
      await submitAppointment({
        nombre: form.nombre.trim(),
        telefono: form.telefono.trim(),
        email: form.email.trim(),
        tratamiento: tratamientoLabel,
        fecha: form.fecha || null,
        mensaje: form.mensaje.trim() || null,
      })
      setIsSuccess(true)
      setForm(initialForm)
    } catch (err) {
      setServerError(err.message || 'Error al enviar. Por favor llámanos al 965 000 000.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cita" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="section-label">Reserva tu cita</span>
              <h2 className="section-title">
                Primera consulta{' '}
                <span className="text-gradient-aqua">completamente gratis</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Reserva tu consulta gratuita y sin compromiso. Te llamaremos en menos de 24 horas
                para confirmar la cita y aclarar cualquier duda.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: CheckCircle, title: 'Sin esperas', desc: 'Gestionamos tu cita con rapidez' },
                { icon: CheckCircle, title: 'Sin compromiso', desc: 'La consulta inicial es totalmente gratis' },
                { icon: CheckCircle, title: 'Respuesta en 24h', desc: 'Confirmamos tu cita el mismo día' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card space-y-4">
              <p className="font-semibold text-navy-700 text-sm">¿Prefieres llamarnos directamente?</p>
              <div className="space-y-3">
                <a
                  href="tel:+34965000000"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-aqua-500 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-aqua-50 group-hover:bg-aqua-100 transition-colors">
                    <Phone size={14} className="text-aqua-500" />
                  </div>
                  <span>965 000 000</span>
                </a>
                <a
                  href="mailto:info@goletadental.es"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-aqua-500 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-aqua-50 group-hover:bg-aqua-100 transition-colors">
                    <Mail size={14} className="text-aqua-500" />
                  </div>
                  <span>info@goletadental.es</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl shadow-card-hover p-7 md:p-9">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-5"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-aqua"
                      style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                    >
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-navy-700 mb-2">¡Solicitud enviada!</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas para confirmar tu cita.
                      </p>
                    </div>
                    <button onClick={() => setIsSuccess(false)} className="btn-aqua">
                      Enviar otra solicitud
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <h3 className="font-display font-bold text-xl text-navy-700 mb-7">
                      Solicitar cita gratuita
                    </h3>

                    <div className="space-y-5">
                      {/* Nombre + Teléfono */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Nombre completo" required error={errors.nombre}>
                          <Input
                            placeholder="Tu nombre y apellidos"
                            value={form.nombre}
                            onValueChange={(v) => handleField('nombre', v)}
                            isInvalid={!!errors.nombre}
                            variant="bordered"
                            radius="lg"
                            classNames={inputStyles}
                          />
                        </Field>

                        <Field label="Teléfono" required error={errors.telefono}>
                          <Input
                            placeholder="612 345 678"
                            type="tel"
                            value={form.telefono}
                            onValueChange={(v) => handleField('telefono', v)}
                            isInvalid={!!errors.telefono}
                            variant="bordered"
                            radius="lg"
                            classNames={inputStyles}
                          />
                        </Field>
                      </div>

                      {/* Email */}
                      <Field label="Correo electrónico" required error={errors.email}>
                        <Input
                          placeholder="tu@email.com"
                          type="email"
                          value={form.email}
                          onValueChange={(v) => handleField('email', v)}
                          isInvalid={!!errors.email}
                          variant="bordered"
                          radius="lg"
                          classNames={inputStyles}
                        />
                      </Field>

                      {/* Tratamiento + Fecha */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Tratamiento de interés" required error={errors.tratamiento}>
                          <select
                            value={[...form.tratamiento][0] || ''}
                            onChange={(e) =>
                              handleField('tratamiento', new Set(e.target.value ? [e.target.value] : []))
                            }
                            className={`w-full h-10 px-3 rounded-xl border bg-white text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-aqua-300 focus:ring-offset-0 appearance-none cursor-pointer ${
                              errors.tratamiento
                                ? 'border-red-400 text-navy-700'
                                : 'border-gray-200 hover:border-aqua-300 focus:border-aqua-400 text-navy-700'
                            } ${![...form.tratamiento][0] ? 'text-gray-400' : 'text-navy-700'}`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 12px center',
                              paddingRight: '36px',
                            }}
                          >
                            <option value="" disabled>Selecciona un tratamiento</option>
                            {treatmentOptions.map((opt) => (
                              <option key={opt.key} value={opt.key}>{opt.label}</option>
                            ))}
                          </select>
                        </Field>

                        <Field label="Fecha preferida">
                          <Input
                            type="date"
                            value={form.fecha}
                            onValueChange={(v) => handleField('fecha', v)}
                            variant="bordered"
                            radius="lg"
                            min={new Date().toISOString().split('T')[0]}
                            classNames={inputStyles}
                          />
                        </Field>
                      </div>

                      {/* Mensaje */}
                      <Field label="Mensaje (opcional)">
                        <Textarea
                          placeholder="Cuéntanos más sobre lo que necesitas, tus dudas o si tienes alguna urgencia..."
                          value={form.mensaje}
                          onValueChange={(v) => handleField('mensaje', v)}
                          variant="bordered"
                          radius="lg"
                          minRows={3}
                          maxRows={5}
                          classNames={{
                            inputWrapper: 'border-gray-200 hover:border-aqua-300 data-[focus=true]:border-aqua-400',
                          }}
                        />
                      </Field>

                      {/* Server error */}
                      {serverError && (
                        <div className="flex items-center gap-2.5 bg-red-50 border border-red-100 rounded-xl p-4">
                          <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                          <p className="text-red-600 text-sm">{serverError}</p>
                        </div>
                      )}

                      {/* Privacy + Submit */}
                      <div className="pt-4 space-y-4">
                        <p className="text-gray-300 text-xs">
                          Al enviar este formulario aceptas nuestra{' '}
                          <a href="#privacidad" className="underline hover:text-aqua-400 transition-colors">
                            política de privacidad
                          </a>
                          . No compartimos tus datos con terceros.
                        </p>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        isLoading={isSubmitting}
                        className="w-full text-white font-bold text-base"
                        style={{ background: 'linear-gradient(135deg, #0ECFB4, #0094FF)' }}
                        radius="full"
                      >
                        {isSubmitting ? 'Enviando...' : 'Solicitar cita gratuita →'}
                      </Button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
