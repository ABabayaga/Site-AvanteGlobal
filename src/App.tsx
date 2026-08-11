import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Produtos from './components/Produtos'
import NossoJeito from './components/NossoJeito'
import Comecar from './components/Comecar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Produtos />
      <NossoJeito />
      <Comecar />
      <Footer />

     
    </>
  )
}

export default App
