import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import NewsLetter from './Components/NewsLetter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
      
    </>
  )
}

export default App
