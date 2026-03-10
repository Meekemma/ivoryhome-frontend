import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'
import BookingForm from '../components/general/BookingForm'

const Booking = () => {
  return (
    <>
        <Helmet>
          <title>Property Booking - Ivory Homes Limited | Secure Your Dream Home</title>
          <meta name="description" content="Book your next property with Ivory Homes Limited. Simple, secure, and straightforward booking process for your dream home." />
          <meta name="keywords" content="property booking, real estate booking Nigeria, reserve property, book home" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/booking" />
          <meta property="og:title" content="Property Booking - Ivory Homes Limited" />
          <meta property="og:description" content="Book your next property with Ivory Homes Limited easily and securely." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/booking" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Property Booking - Ivory Homes Limited" />
          <meta name="twitter:description" content="Book your dream property with Ivory Homes Limited." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        <Navbar />
        <BookingForm />
        <HomeFooter />
    </>
        
  )
}

export default Booking