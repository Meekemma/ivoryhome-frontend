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
          <meta property="og:title" content="About Us - Ivory Homes Limited | Premium Real Estate in Nigeria" />
          <meta property="og:description" content="Learn about Ivory Homes Limited, your trusted partner in premium real estate. Discover our mission, vision, and commitment to delivering world-class properties." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/about" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Us - Ivory Homes Limited" />
          <meta name="twitter:description" content="Learn about Ivory Homes Limited, your trusted partner in premium real estate." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        
        <Navbar />
        <AboutUsDetailed />
        <GeneralButton />
        <HomeFooter />
    
    </>
    
  )
}

export default About