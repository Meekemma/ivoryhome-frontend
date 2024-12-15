import React from 'react'
import Properties from '../components/properties/Properties'
import HomeFooter from '../components/general/HomeFooter'
import GeneralButton from '../components/general/GeneralButton'
import PropertyNavbar from '../components/properties/PropertyNavbar'
import { SearchProvider } from '../context/SearchContext'

const AllProperties = () => {
  return (
    <>
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


