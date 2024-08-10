import React from 'react'
import ContactSection from '../Pages/Contact/ContactSection'
import HeroSection from "./global/HeroSection";
import Header from "./global/Header";
import Footer from "./global/Footer";

function Contact() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <ContactSection />
        <Footer/>
    </div>
  )
}

export default Contact;