import React from 'react'
import Property from '../components/properties/Property'
import HomeFooter from '../components/general/HomeFooter'
import PropertyNavbar from '../components/properties/PropertyNavbar'
import { SearchProvider } from '../context/SearchContext'

const SingleProperty = () => {
  return (
    <>
      <SearchProvider>
        <PropertyNavbar />
        <Property />
        <HomeFooter />
      </SearchProvider>

    
    
    </>
  )
}

export default SingleProperty