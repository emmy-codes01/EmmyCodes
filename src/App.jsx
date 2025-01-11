/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import PhotoSlides from './components/PhotoSlides'
import Herosection from './components/Herosection'
import ServicesSection from './components/Services'
import ContactSection from './components/ContactSection'
import Test from './components/Test'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div className="font-space-grotesk">
      <Navbar />
      <Herosection />
      {/* <Test /> */}
      <PhotoSlides />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default App
