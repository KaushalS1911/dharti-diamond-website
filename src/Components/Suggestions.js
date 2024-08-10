import React from 'react'
import SuggestionsSection from '../Pages/Suggestions/SuggestionsSection'
import Header from "./global/Header";
import HeroSection from "./global/HeroSection";
import Footer from "./global/Footer";

function Suggestions() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <SuggestionsSection/>
        <Footer/>
    </div>
  )
}

export default Suggestions;