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
          <meta property="og:title" content="Owerri Estate - Smart Investment" />
          <meta property="og:description" content="Strategically located estate with proximity to key landmarks and excellent infrastructure." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/estate/Owerri-estate" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Owerri Estate - Smart Investment" />
          <meta name="twitter:description" content="Strategic investment opportunity in Owerri." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        
        <Navbar />
        <OwerriEstate/>
        <HomeFooter />
    
    
    </>
        
  )
}

export default OwerriPage