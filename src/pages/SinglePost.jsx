import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/general/Navbar';
import HomeFooter from '../components/general/HomeFooter';
import SinglePostPage from '../components/blog/SinglePostPage';

const SinglePost = () => {
  return (
    <>
      <Helmet>
        <title>Blog Post - Ivory Homes Limited | Real Estate News & Insights</title>
        <meta name="description" content="Read insightful articles about real estate, property investment tips, and market trends from Ivory Homes Limited." />
        <meta name="keywords" content="real estate blog, property investment, market trends, real estate news Nigeria" />
        <meta property="og:title" content="Blog Post - Ivory Homes Limited" />
        <meta property="og:description" content="Read insightful real estate articles and investment tips." />
        <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Post - Ivory Homes Limited" />
        <meta name="twitter:description" content="Real estate insights from Ivory Homes Limited." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
      </Helmet>
      <Navbar />
      <main className="min-h-[calc(100vh-128px)] flex justify-center items-center">
        <SinglePostPage />
      </main>
      <HomeFooter />
    </>
  );
};

export default SinglePost;
