import React from 'react'
import Exploration from '../Pages/Home/Exploration'
import Letest from '../Pages/Home/Letest'
import Round_diamond from '../Pages/Home/Round_diamond'
import Footer from './global/Footer'
import Manufature from "../Pages/Home/Manufature";
import Header from '../Components/global/Header'
import HeroSection from '../Components/global/HeroSection'
import AboutSection9 from '../Pages/About/AboutSection9'

function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
      <Manufature/>
      <Exploration/>
     <AboutSection9/>
      <Letest/>
      <Round_diamond/>
      <Footer/>
     
    </div>
  )
}

export default Home
