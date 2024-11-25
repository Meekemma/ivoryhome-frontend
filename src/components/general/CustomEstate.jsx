import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Replace these placeholders with actual paths
import kindelmedia from '../../assets/images/kindelmedia.jpg';

const CustomEstate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);


  return (
    <div className="container mx-auto py-12 px-6 bg-[#F9FAFB]">
      {/* Estate Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden grid gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]" data-aos="fade-up" data-aos-delay="100">
        {/* Estate Image */}
        <LazyLoadImage
          src={kindelmedia}
          alt="Beautiful Estate"
          className="w-full h-64 object-cover lg:h-auto lg:col-span-1 lg:row-span-2"
          effect="blur"
          wrapperProps={{
            style: { 
              transition: "opacity 1s ease-in-out", // Smoother transitions
              backgroundColor: "rgba(0,0,0,0.1)", // Optional background
            },
          }}
        />

        {/* Estate Details */}
        <div className="p-6" data-aos="fade-up" data-aos-delay="100">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#005fa3] mb-4">
            Royal Dynasty Estate
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6">
            Welcome to <span className="font-bold">Royal Dynasty Estate</span>, your gateway to luxury living. Located in a
            serene and secure environment, this estate offers top-notch amenities and unparalleled comfort. Whether
            you're looking to build your dream home or make a profitable investment, Emerald Estate is the perfect
            choice.
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



      <div className="bg-white  my-5 rounded-lg shadow-lg overflow-hidden grid gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]" data-aos="fade-up" data-aos-delay="100">
        {/* Estate Image */}
        <LazyLoadImage
          src={kindelmedia}
          alt="Beautiful Estate"
          className="w-full h-64 object-cover lg:h-auto lg:col-span-1 lg:row-span-2"
          effect="blur"
          wrapperProps={{
            style: { 
              transition: "opacity 1s ease-in-out", // Smoother transitions
              backgroundColor: "rgba(0,0,0,0.1)", // Optional background
            },
          }}
        />

        {/* Estate Details */}
        <div className="p-6" data-aos="fade-up" data-aos-delay="100">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#005fa3] mb-4">
            Ndioba Estate
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-6">
            Welcome to <span className="font-bold">Royal Dynasty Estate</span>, your gateway to luxury living. Located in a
            serene and secure environment, this estate offers top-notch amenities and unparalleled comfort. Whether
            you're looking to build your dream home or make a profitable investment, Emerald Estate is the perfect
            choice.
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
    </div>
  );
};

export default CustomEstate;
