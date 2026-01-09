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
        </Helmet>
        
        <Navbar />
        <ServicePage />
        <GeneralButton />
        <HomeFooter />


    </>
  )
}

export default Service