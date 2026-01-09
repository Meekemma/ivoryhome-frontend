import React from 'react'
import { Helmet } from 'react-helmet-async'
import OwerriEstate from '../components/estate/OwerriEstate'
import HomeFooter from '../components/general/HomeFooter'
import Navbar from '../components/general/Navbar'


const OwerriPage = () => {
  return (
    <>
        <Helmet>
          <title>Owerri Estate - Smart Investment | Ivory Homes Limited</title>
          <meta name="description" content="Invest in Owerri Estate - strategically located in the heart of Owerri with proximity to key landmarks, shopping centers, and excellent infrastructure." />
          <meta name="keywords" content="Owerri Estate, property Owerri, real estate Imo State, investment opportunity" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/estate/Owerri-estate" />
        </Helmet>
        
        <Navbar />
        <OwerriEstate/>
        <HomeFooter />
    
    
    </>
        
  )
}

export default OwerriPage