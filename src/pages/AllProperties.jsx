import React from 'react'
import Properties from '../components/properties/Properties'
import HomeFooter from '../components/general/HomeFooter'
import GeneralButton from '../components/general/GeneralButton'
import PropertyNavbar from '../components/properties/PropertyNavbar'

const AllProperties = () => {
  return (
    <>
        <PropertyNavbar />
        <Properties />
        <GeneralButton />
        <HomeFooter />
    
    </>
  )
}

export default AllProperties


