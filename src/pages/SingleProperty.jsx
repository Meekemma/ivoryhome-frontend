import React from 'react'
import { Helmet } from 'react-helmet-async'
import Property from '../components/properties/Property'
import HomeFooter from '../components/general/HomeFooter'
import PropertyNavbar from '../components/properties/PropertyNavbar'
import { SearchProvider } from '../context/SearchContext'

const SingleProperty = () => {
  return (
    <>
      <Helmet>
        <title>Property Details - Ivory Homes Limited | Find Your Dream Home</title>
        <meta name="description" content="View detailed information about premium properties available from Ivory Homes Limited. High-quality properties across Nigeria." />
        <meta name="keywords" content="property details, real estate listings, houses for sale Nigeria, property information" />
        <meta property="og:title" content="Property Details - Ivory Homes Limited" />
        <meta property="og:description" content="View detailed information about premium properties from Ivory Homes Limited." />
        <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Property Details - Ivory Homes Limited" />
        <meta name="twitter:description" content="Premium property details and information." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
      </Helmet>
      <SearchProvider>
        <PropertyNavbar />
        <Property />
        <HomeFooter />
      </SearchProvider>
    </>
  )
}

export default SingleProperty