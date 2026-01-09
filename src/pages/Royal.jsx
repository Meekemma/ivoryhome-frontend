import React from 'react'
import { Helmet } from 'react-helmet-async'
import RoyalDynastyEstate from '../components/estate/RoyalDynastyEstate'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'

const Royal = () => {
  return (
   <>
        <Helmet>
          <title>Royal Dynasty Estate - Luxury Living | Ivory Homes Limited</title>
          <meta name="description" content="Discover Royal Dynasty Estate - an exclusive residential community offering world-class amenities, 24/7 security, and premium infrastructure in a serene environment." />
          <meta name="keywords" content="Royal Dynasty Estate, luxury estate Nigeria, gated community, premium residential" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/estate/royal-dynasty-estate" />
        </Helmet>
        
        <Navbar />
        <RoyalDynastyEstate/>
        <HomeFooter />
   
   </>
  )
}

export default Royal