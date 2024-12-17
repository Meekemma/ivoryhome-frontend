import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

// Replace these placeholders with actual paths
import royal_home from '../../assets/images/royal_home.jpg';
import indiobi from '../../assets/images/indiobi.jpg';
import RoyalGallery from './RoyalGallary';
import NdiobaGallary from './NdiobaGallary';

const CustomEstate = () => {
  const navigate = useNavigate();

  // Handlers for button navigation
  const handleScheduleVisit = () => {
    navigate('/booking'); // Update this route to match your app's routing
  };

  const handleRequestMoreInfo = () => {
    navigate('/contact'); // Update this route to match your app's routing
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);


  return (
    <div className="container mx-auto py-12 px-6 bg-[#F9FAFB]">
      {/* Estate Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden grid gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]" data-aos="fade-up">
        {/* Estate Image */}
        <LazyLoadImage
          src={royal_home}
          alt="Beautiful Estate"
          className="w-full h-64 lg:h-96 object-cover lg:col-span-1 lg:row-span-2 rounded-lg"
          wrapperProps={{
            style: { 
              transition: "opacity 1s ease-in-out",
              
            },
          }}
        />


        {/* Estate Details */}
        <div className="p-6" data-aos="fade-up">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#005fa3] mb-4">
            Royal Dynasty Estate
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6">
            Welcome to <span className="font-bold">Royal Dynasty Estate</span>, your gateway to luxury living. Located in a 
            serene and secure environment, this estate offers top-notch amenities and unparalleled comfort. Whether 
            you're looking to build your dream home or make a profitable investment, Royal Dynasty Estate is the perfect 
            choice. 

            Featuring well-planned infrastructure, including paved roads, 24/7 security, and uninterrupted power supply, 
            this estate is designed to cater to your every need. Imagine waking up to breathtaking views, surrounded by 
            lush greenery and a calm ambiance that enhances your lifestyle. 

            Royal Dynasty Estate is not just a place to live, it's a community where neighbors become family, and memories 
            are made. Enjoy recreational facilities, modern conveniences, and a location that's just minutes away from 
            schools, shopping malls, and major transportation hubs. 

            Make the smart move today and secure your place in Royal Dynasty Estate,where elegance meets convenience and 
            dreams become reality.
          </p>

        </div>

        {/* Buttons */}
        <div className="p-6 flex flex-wrap ">
          <button
            href="/downloads/subscription-form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005fa3] btn text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-[#003f73] transition"
          >
            Download Subscription Form
          </button>
          <button
            href="/downloads/outright-price.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-[#005fa3] text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
          >
            Download Outright Price
          </button>
        </div>
       
      </div>
      <RoyalGallery />



      <div className="bg-white  my-5 rounded-lg shadow-lg overflow-hidden grid gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]" data-aos="fade-up">
        {/* Estate Image */}
        <LazyLoadImage
          src={indiobi}
          alt="Beautiful Estate"
          className="w-full h-64 lg:h-96 object-cover lg:col-span-1 lg:row-span-2 rounded-lg"
          wrapperProps={{
            style: { 
              transition: "opacity 1s ease-in-out",
            },
          }}
        />


        {/* Estate Details */}
        <div className="p-6" data-aos="fade-up">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#005fa3] mb-4">
            Ndioba Estate
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6">
            Welcome to <span className="font-bold">Ndioba Estate</span>, where modern living meets timeless elegance. Nestled 
            in a peaceful and well-secured environment, this estate is a sanctuary of comfort and sophistication. 

            Designed with families, professionals, and investors in mind, Ndioba Estate offers exceptional opportunities for 
            creating lifelong memories or expanding your real estate portfolio. From meticulously landscaped gardens to 
            thoughtfully crafted living spaces, every detail reflects quality and care.

            With state-of-the-art facilities, including recreational areas, reliable utilities, and dedicated security, 
            Ndioba Estate redefines convenience and luxury. Strategically located near major landmarks, it provides easy 
            access to schools, healthcare, and shopping destinations, making it an ideal choice for those seeking a balanced lifestyle. 

            At Ndioba Estate, your aspirations for a modern, tranquil, and rewarding lifestyle come to life. Make your dream 
            a reality and secure your future in this thriving community.
          </p>

          

        </div>

        {/* Buttons */}
        <div className="p-6 flex flex-wrap ">
          <button
            href="/downloads/subscription-form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005fa3] btn text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-[#003f73] transition"
          >
            Download Subscription Form
          </button>
          <button
            href="/downloads/outright-price.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-[#005fa3] text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
          >
            Download Outright Price
          </button>
        </div>
      </div>
      <NdiobaGallary />

      {/* Buttons */}
     
    
      <div className="p-6 flex flex-wrap justify-center items-center gap-6">
        <button
          onClick={handleScheduleVisit} // Replace with actual functionality
          className="bg-[#005fa3] text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#003f73] transition"
        >
          Schedule a Visit
        </button>
        <button
          onClick={handleRequestMoreInfo} // Replace with actual functionality
          className="bg-gray-200 text-[#005fa3] text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-300 transition"
        >
          Request More Info
        </button>
      </div>



    </div>
  );
};

export default CustomEstate;
