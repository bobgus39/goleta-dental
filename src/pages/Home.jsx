import Hero from '../components/Hero.jsx'
import SobreNosotros from '../components/SobreNosotros.jsx'
import Tratamientos from '../components/Tratamientos.jsx'
import Tecnologia from '../components/Tecnologia.jsx'
import Proceso from '../components/Proceso.jsx'
import DisenoSonrisa from '../components/DisenoSonrisa.jsx'
import PorQueElegirnos from '../components/PorQueElegirnos.jsx'
import Testimonios from '../components/Testimonios.jsx'
import Precios from '../components/Precios.jsx'
import Formulario from '../components/Formulario.jsx'
import Contacto from '../components/Contacto.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SobreNosotros />
      <Tratamientos />
      <Tecnologia />
      <Proceso />
      <DisenoSonrisa />
      <PorQueElegirnos />
      <Testimonios />
      <Precios />
      <Formulario />
      <Contacto />
      <Footer />
    </main>
  )
}
