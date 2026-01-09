import React from 'react'
import { Helmet } from 'react-helmet-async'
import TermsAndConditions from '../components/general/TermsAndConditions'
import Navbar from '../components/general/Navbar'
import GeneralButton from '../components/general/GeneralButton'
import HomeFooter from '../components/general/HomeFooter'

const TermsAndConditionsPage = () => {
  return (
    <>
        <Helmet>
          <title>Terms & Conditions - Ivory Homes Limited</title>
          <meta name="description" content="Review the terms and conditions for using Ivory Homes Limited's services and website. Understand your rights and obligations." />
          <meta name="keywords" content="terms and conditions, user agreement, service terms" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/Terms_&_conditions" />
        </Helmet>
        
        <Navbar />
        <TermsAndConditions/>
        
        <GeneralButton />
        <HomeFooter />
        
    
    </>
  )
}

export default TermsAndConditionsPage