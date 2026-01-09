import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/general/Navbar'
import HomeFooter from '../components/general/HomeFooter'
import MyCarousel from '../components/general/MyCarousel'
import Testimonials from '../components/general/Testimonials'
import AboutUs from '../components/general/AboutUs'
import OurServices from '../components/general/OurServices'
import WhyChooseUs from '../components/general/WhyChooseUs '
import Faq from '../components/general/Faq'
import ContactInfo from '../components/general/ContactInfo'
import GeneralButton from '../components/general/GeneralButton'
import PropertyInfo from '../components/general/PropertyInfo'
import BlogInfo from '../components/general/BlogInfo'
import EstateInfo from '../components/estate/EstateInfo'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ivory Homes Limited - Premium Real Estate Properties in Nigeria</title>
        <meta name="description" content="Discover luxury homes and prime properties in Nigeria with Ivory Homes Limited. We offer Royal Dynasty Estate, Indiobi Estate, and Owerri Estate with world-class amenities." />
        <meta name="keywords" content="real estate Nigeria, luxury homes, property investment, Royal Dynasty Estate, Indiobi Estate, Owerri Estate" />
        <link rel="canonical" href="https://www.ivoryhomesng.com/" />
      </Helmet>
      
      <Navbar />
      <MyCarousel />
      <AboutUs />
      <EstateInfo/>
      <OurServices />
      <PropertyInfo/>
      <WhyChooseUs />
      <BlogInfo/>
      <Faq />
      <Testimonials />
      <ContactInfo />
      <GeneralButton />
      <HomeFooter />
      
    
    </>
    
  )
}

export default Home