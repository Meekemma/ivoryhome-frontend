import React from 'react'
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

const Home = () => {
  return (
    <>
      <Navbar />
      <MyCarousel />
      <AboutUs />
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