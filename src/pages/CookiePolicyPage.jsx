import React from 'react'
import { Helmet } from 'react-helmet-async'
import CookiePolicy from '../components/general/CookiePolicy'
import Navbar from '../components/general/Navbar'
import GeneralButton from '../components/general/GeneralButton'
import HomeFooter from '../components/general/HomeFooter'

const CookiePolicyPage = () => {
  return (
    <>
        <Helmet>
          <title>Cookie Policy - Ivory Homes Limited</title>
          <meta name="description" content="Learn about how Ivory Homes Limited uses cookies to enhance your browsing experience and collect analytics data." />
          <meta name="keywords" content="cookie policy, cookies, web analytics" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/Cookie_policy" />
        </Helmet>
        
        <Navbar />
        <CookiePolicy/>
        
        <GeneralButton />
        <HomeFooter />
        
    
    </>
  )
}

export default CookiePolicyPage