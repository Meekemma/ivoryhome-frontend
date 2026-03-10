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
          <meta property="og:title" content="Royal Dynasty Estate - Luxury Living" />
          <meta property="og:description" content="Discover Royal Dynasty Estate - an exclusive residential community with world-class amenities and premium infrastructure." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/estate/royal-dynasty-estate" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Royal Dynasty Estate - Luxury Living" />
          <meta name="twitter:description" content="Exclusive residential community with world-class amenities." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>
        
        <Navbar />
        <RoyalDynastyEstate/>
        <HomeFooter />
   
   </>
  )
}

export default Royal