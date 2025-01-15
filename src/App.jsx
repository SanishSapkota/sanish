import React,{ useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Hero from './Components/Hero'
import Body from './Components/Body'
import Body2 from './Components/Body2'
import Footer from './Components/Footer'
import Lifeslider from './Components/Lifeslider'
import Inspiration from './Components/PhotoGallery'
import Honors from './Components/Honors'
import './Components/styles.css'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Body/>
    <Body2/>
    <Lifeslider/>
    <Inspiration/>
    <Honors/>
    <Footer/>
    </>
  )
}

export default App;
