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