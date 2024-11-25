import React from 'react'
import BlogShowCase from '../components/blog/BlogShowCase'
import BlogPostList from '../components/blog/BlogPostList'
import BlogButton from '../components/blog/BlogButton'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
        < BlogShowCase />
        < BlogPostList />
        <BlogButton />
        <Footer />

    </>
  )
}

export default Blog