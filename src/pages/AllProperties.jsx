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


