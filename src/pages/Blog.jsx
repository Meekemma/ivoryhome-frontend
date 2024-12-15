import React from 'react'
import Navbar from '../components/general/Navbar'
import BlogShowCase from '../components/blog/BlogShowCase'
import BlogPostList from '../components/blog/BlogPostList'
import BlogButton from '../components/blog/BlogButton'
import HomeFooter from '../components/general/HomeFooter'
import { SearchProvider } from '../context/SearchContext'

const Blog = () => {
  return (
    <>
        

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