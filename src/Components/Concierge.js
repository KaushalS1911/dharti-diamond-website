import React from 'react'
import ConciergeSection1 from '../Pages/concierge/ConciergeSection1'
import ConciergeSection2 from '../Pages/concierge/ConciergeSection2'
import Header from "./global/Header";
import Footer from "./global/Footer";
import HeroSection from "./global/HeroSection";

function Concierge() {
  return (
    <div>
        <Header/>
        <HeroSection/>
      <ConciergeSection1/>
      <ConciergeSection2/>
      <Footer/>
    </div>
  )
}

export default Concierge
