import React from 'react'
import Navbar from '../components/general/Navbar'
import BlogShowCase from '../components/blog/BlogShowCase'
import BlogPostList from '../components/blog/BlogPostList'
import BlogButton from '../components/blog/BlogButton'
import HomeFooter from '../components/general/HomeFooter'

const Blog = () => {
  return (
    <>
        < Navbar />
        < BlogShowCase />
        < BlogPostList />
        < BlogButton /> 
        < HomeFooter />
        

    </>
  )
}

export default Blog