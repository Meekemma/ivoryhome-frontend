import React from 'react'
import { Helmet } from 'react-helmet-async'
import IndiobiEstate from '../components/estate/IndiobiEstate'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'

const IndiobiPage = () => {
  return (
    <>
        <Helmet>
          <title>Indiobi Estate - Modern Living | Ivory Homes Limited</title>
          <meta name="description" content="Explore Indiobi Estate - a contemporary residential development with excellent road networks, constant power supply, and modern amenities for comfortable living." />
          <meta name="keywords" content="Indiobi Estate, modern estate Nigeria, affordable housing, residential development" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/estate/Indiobi-estate" />
          <meta property="og:title" content="Indiobi Estate - Modern Living" />
          <meta property="og:description" content="Contemporary residential development with excellent road networks and modern amenities." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/estate/Indiobi-estate" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Indiobi Estate - Modern Living" />
          <meta name="twitter:description" content="Contemporary residential development with modern amenities." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>

        <Navbar />
        <IndiobiEstate/>
        <HomeFooter />
        
    
    
    
    </>
  )
}

export default IndiobiPage