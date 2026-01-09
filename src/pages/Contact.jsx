import React from 'react'
import { Helmet } from 'react-helmet-async'
import CustomMap from '../components/general/CustomMap'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'
import ContactAnime from '../components/general/ContactAnime'
import GeneralButton from '../components/general/GeneralButton'

const Contact = () => {
  return (
    <>
        <Helmet>
          <title>Contact Us - Ivory Homes Limited | Get in Touch</title>
          <meta name="description" content="Contact Ivory Homes Limited for inquiries about properties, investment opportunities, or general questions. We're here to help you find your dream home." />
          <meta name="keywords" content="contact ivory homes, real estate inquiry, property contact Nigeria" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/contact" />
        </Helmet>
        
        <Navbar />
        <ContactAnime />
        <CustomMap />
        <GeneralButton />
        <HomeFooter />
    
    
    </>
  )
}

export default Contact