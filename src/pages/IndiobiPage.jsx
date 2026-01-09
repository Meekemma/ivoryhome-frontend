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
        </Helmet>

        <Navbar />
        <IndiobiEstate/>
        <HomeFooter />
        
    
    
    
    </>
  )
}

export default IndiobiPage