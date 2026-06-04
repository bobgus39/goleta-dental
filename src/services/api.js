const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export async function submitAppointment(data) {
  const response = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: 'Error de conexión con el servidor' }))
    throw new Error(err.error || 'Error al enviar la solicitud')
  }

  return response.json()
}
