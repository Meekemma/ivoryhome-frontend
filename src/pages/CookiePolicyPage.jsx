import React from 'react'
import CookiePolicy from '../components/general/CookiePolicy'
import Navbar from '../components/general/Navbar'
import GeneralButton from '../components/general/GeneralButton'
import HomeFooter from '../components/general/HomeFooter'

const CookiePolicyPage = () => {
  return (
    <>
        <Navbar />
        <CookiePolicy/>
        
        <GeneralButton />
        <HomeFooter />
        
    
    </>
  )
}

export default CookiePolicyPage