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
          <meta property="og:title" content="Contact Us - Ivory Homes Limited" />
          <meta property="og:description" content="Get in touch with Ivory Homes Limited for property inquiries and investment opportunities." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/contact" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us - Ivory Homes Limited" />
          <meta name="twitter:description" content="Contact Ivory Homes Limited for all your real estate needs." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
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