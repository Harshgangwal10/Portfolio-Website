import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Skill from './Components/SKills/Skill.jsx'
import Project from './Components/Project/Project.jsx'
import Contact from './Components/Contact/contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App
