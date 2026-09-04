import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Inicio from './components/Inicio'
import Institucional from './components/Institucional'
import Seguros from './components/Seguros'
import Tecnologias from './components/Tecnologias'
import Consultorias from './components/Consultorias'
import Parceiros from './components/Parceiros'
import Novidades from './components/Novidades'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="pt-28 max-lg:pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Inicio />
              </>
            }
          />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/consultorias" element={<Consultorias />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/novidades" element={<Novidades />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
