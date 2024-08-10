import React from 'react'
import AboutSection2 from '../Pages/About/AboutSection2'
import AboutSection3 from '../Pages/About/AboutSection3'
import AboutSection4 from '../Pages/About/AboutSection4'
import AboutSection5 from '../Pages/About/AboutSection5'
import AboutSection6 from '../Pages/About/AboutSection6'
import AboutSection7 from '../Pages/About/AboutSection7'
import AboutSection8 from '../Pages/About/AboutSection8'
import AboutSection9 from '../Pages/About/AboutSection9'
import Header from "./global/Header";
import HeroSection from "./global/HeroSection";
import Footer from "./global/Footer";

function About() {
  return (
    <div>
        <Header/>
        <HeroSection/>
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
      <AboutSection8 />
      <AboutSection9 />
      <Footer/>
    </div>
  )
}

export default About;