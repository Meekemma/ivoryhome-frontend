import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/general/Navbar';
import HomeFooter from '../components/general/HomeFooter';
import GeneralButton from '../components/general/GeneralButton';
import MasonryGallery from '../components/gallery/MasonryGallery';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Ivory Homes Limited | Our Events & Activities</title>
        <meta name="description" content="View our gallery showcasing company events, team meetings, property launches, and community activities at Ivory Homes Limited." />
        <meta name="keywords" content="Ivory Homes events, company gallery, team activities, corporate events, real estate company Nigeria" />
        <link rel="canonical" href="https://www.ivoryhomesng.com/gallery" />
        <meta property="og:title" content="Gallery - Ivory Homes Limited | Our Events & Activities" />
        <meta property="og:description" content="View our gallery showcasing company events, team meetings, and community activities." />
        <meta property="og:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.ivoryhomesng.com/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Ivory Homes Limited" />
        <meta name="twitter:description" content="View our gallery and company events." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dc9pb66nk/image/upload/v1773132699/logo_zvpfu6.png" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#005fa3] to-[#0077cc] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Discover moments that define our journey - from corporate milestones to community engagement
          </p>
        </div>
      </div>

      {/* Gallery Component */}
      <MasonryGallery />

      <GeneralButton />
      <HomeFooter />
    </>
  );
};

export default Gallery;
