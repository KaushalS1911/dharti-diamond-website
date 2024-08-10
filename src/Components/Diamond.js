import React from 'react'
import DiamondSection from '../Pages/diamond/DiamondSection';
import Header from "./global/Header";
import HeroSection from "./global/HeroSection";
import Footer from "./global/Footer";


function Diamond() {
  return (
    <div>
        <Header/>
        <HeroSection/>
     <DiamondSection/>
     <Footer/>
    </div>
  )
}

export default Diamond ;
