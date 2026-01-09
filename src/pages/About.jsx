import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutUsDetailed from '../components/general/AboutUsDetailed'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'
import GeneralButton from '../components/general/GeneralButton'

const About = () => {
  return (
    <>
        <Helmet>
          <title>About Us - Ivory Homes Limited | Premium Real Estate in Nigeria</title>
          <meta name="description" content="Learn about Ivory Homes Limited, your trusted partner in premium real estate. Discover our mission, vision, and commitment to delivering world-class properties in Nigeria." />
          <meta name="keywords" content="about ivory homes, real estate company Nigeria, property development, our story" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/about" />
        </Helmet>
        
        <Navbar />
        <AboutUsDetailed />
        <GeneralButton />
        <HomeFooter />
    
    </>
    
  )
}

export default About