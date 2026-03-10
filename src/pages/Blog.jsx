import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/general/Navbar'
import BlogShowCase from '../components/blog/BlogShowCase'
import BlogPostList from '../components/blog/BlogPostList'
import BlogButton from '../components/blog/BlogButton'
import HomeFooter from '../components/general/HomeFooter'
import { SearchProvider } from '../context/SearchContext'

const Blog = () => {
  return (
    <>
        <Helmet>
          <title>Real Estate Blog - Ivory Homes Limited | News & Insights</title>
          <meta name="description" content="Stay updated with the latest real estate news, property investment tips, market insights, and expert advice from Ivory Homes Limited." />
          <meta name="keywords" content="real estate blog, property news Nigeria, investment tips, market updates" />
          <link rel="canonical" href="https://www.ivoryhomesng.com/blog" />
          <meta property="og:title" content="Real Estate Blog - Ivory Homes Limited | News & Insights" />
          <meta property="og:description" content="Stay updated with the latest real estate news, property investment tips, market insights, and expert advice." />
          <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://www.ivoryhomesng.com/blog" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Real Estate Blog - Ivory Homes Limited" />
          <meta name="twitter:description" content="Latest real estate news and investment tips from Ivory Homes Limited." />
          <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        </Helmet>

        <SearchProvider>
          < Navbar />
          < BlogShowCase />
          < BlogPostList />
          < BlogButton /> 
          < HomeFooter />
        </SearchProvider>

        
        

    </>
  )
}

export default Blog