import React from 'react'
import { Helmet } from 'react-helmet-async'
import Properties from '../components/properties/Properties'
import HomeFooter from '../components/general/HomeFooter'
import GeneralButton from '../components/general/GeneralButton'
import PropertyNavbar from '../components/properties/PropertyNavbar'
import { SearchProvider } from '../context/SearchContext'

const AllProperties = () => {
  return (
    <>
        <Helmet>
          <title>All Properties - Ivory Homes Limited | Find Your Dream Home</title>
          <meta name="description" content="Browse our extensive collection of premium properties for sale and rent across Nigeria. Find luxury homes, apartments, and land in prime locations." />
          <meta name="keywords" content="properties Nigeria, houses for sale, luxury homes, apartments for rent, real estate listings" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/Properties" />
          <meta property="og:title" content="All Properties - Ivory Homes Limited" />
          <meta property="og:description" content="Browse our extensive collection of premium properties for sale and rent across Nigeria." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/Properties" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="All Properties - Ivory Homes Limited" />
          <meta name="twitter:description" content="Browse premium properties for sale and rent across Nigeria." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        
        <SearchProvider>
          <PropertyNavbar />
          <Properties />
          <GeneralButton />
          <HomeFooter />
        </SearchProvider>
    
    </>
  )
}

export default AllProperties


