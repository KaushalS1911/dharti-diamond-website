import React from 'react'
import ProductSection from '../Pages/products/ProductSection'
import ProductSection2 from '../Pages/products/ProductSection2'
import ProductSection3 from '../Pages/products/ProductSection3'
import Header from "./global/Header";
import HeroSection from "./global/HeroSection";
import Footer from "./global/Footer";

function Product() {
  return (
    <div>

        <HeroSection/>
      <ProductSection/>
      <ProductSection2/>
      <ProductSection3/>
    </div>
  )
}

export default Product
