import React from 'react'
import { Helmet } from 'react-helmet-async'
import PrivacyPolicy from '../components/general/PrivacyPolicy'
import Navbar from '../components/general/Navbar'
import GeneralButton from '../components/general/GeneralButton'
import HomeFooter from '../components/general/HomeFooter'

const PrivacyPolicyPage = () => {
  return (
    <>
        <Helmet>
          <title>Privacy Policy - Ivory Homes Limited</title>
          <meta name="description" content="Read Ivory Homes Limited's privacy policy to understand how we collect, use, and protect your personal information." />
          <meta name="keywords" content="privacy policy, data protection, user privacy" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/Privacy_&_Policy" />
        </Helmet>
        
        <Navbar />
        <PrivacyPolicy/>
        
        <GeneralButton />
        <HomeFooter />
        
    
    </>
  )
}

export default PrivacyPolicyPage