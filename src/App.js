import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Suggestions from './Components/Suggestions'
import Contact from './Components/Contact'

import Diamond from "./Components/Diamond";
import './App.css';
import Header from './Components/global/Header';
import HeroSection from './Components/global/HeroSection';
import Home from './Components/Home';
import Product from "./Components/Product";
import Concierge from "./Components/Concierge";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/suggestions' element={<Suggestions/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/diamond' element={<Diamond/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/concierge' element={<Concierge/>}/>




            </Routes>
            {/*<div className="App">*/}
            {/*    <Header/>*/}
            {/*    <HeroSection/>*/}
            {/*    <Home/>*/}
            {/*</div>*/}
        </div>
            )
            }

            export default App