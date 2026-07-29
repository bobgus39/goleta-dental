import { HashRouter, Routes, Route, useHref, useNavigate } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

/**
 * El provider vive dentro del Router para poder pasarle navigate/useHref:
 * así los componentes de HeroUI con `href` (Link, NavbarItem, Button as={Link}…)
 * navegan por el router en vez de recargar la página.
 */
function UIProvider({ children }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref} locale="es-ES">
      {children}
    </HeroUIProvider>
  )
}

export default function App() {
  return (
    <HashRouter>
      <UIProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UIProvider>
    </HashRouter>
  )
}
