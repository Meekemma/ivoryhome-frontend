import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kindelmedia from '../../assets/images/kindelmedia.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-6 leading-tight">
          About Ivory Homes Limited .....
        </h2>


          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Welcome to <span className="font-bold">Ivory Homes Limited</span>, your trusted partner in real estate. Whether you’re
            buying, selling, or renting, our mission is to help you navigate the property market
            with confidence and ease.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            With years of experience, we specialize in connecting clients with their dream homes
            and lucrative investments. Our team is committed to providing exceptional service,
            tailored to your unique needs.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Let us help you find the perfect property or the ideal buyer. Experience real estate
            solutions that are transparent, professional, and efficient.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <LazyLoadImage
            src={kindelmedia} // Replace with your image path
            alt="Modern Home"
            className="rounded-lg shadow-lg max-w-full h-auto"
            effect="blur"
            data-aos="fade-up"
            wrapperProps={{
              style: { 
                transition: "opacity 1s ease-in-out", // Smoother transitions
                backgroundColor: "rgba(0,0,0,0.1)", // Optional background
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
