import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'
import ServicePage from '../components/general/ServicePage'
import GeneralButton from '../components/general/GeneralButton'

const Service = () => {
  return (
    <>
        <Helmet>
          <title>Our Services - Ivory Homes Limited | Real Estate Solutions</title>
          <meta name="description" content="Explore our comprehensive real estate services including property sales, consultancy, investment opportunities, and property management across Nigeria." />
          <meta name="keywords" content="real estate services, property management, investment advisory, property sales Nigeria" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/service" />
          <meta property="og:title" content="Our Services - Ivory Homes Limited | Real Estate Solutions" />
          <meta property="og:description" content="Explore our comprehensive real estate services including property sales, consultancy, and investment opportunities." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/service" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Our Services - Ivory Homes Limited" />
          <meta name="twitter:description" content="Comprehensive real estate services from Ivory Homes Limited." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        
        <Navbar />
        <ServicePage />
        <GeneralButton />
        <HomeFooter />


    </>
  )
}

export default Service