import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import kindelmedia from '../../assets/images/kindelmedia.jpg';

const services = [
  {
    title: 'Residential Sales',
    description: 'Find your dream home with our extensive selection of residential properties. We offer expert guidance and competitive pricing.',
    icon: kindelmedia, // Replace with relevant icon/image
  },
  {
    title: 'Commercial Properties',
    description: 'Explore top-tier commercial properties that suit your business needs. We provide both leasing and buying options for various industries.',
    icon: kindelmedia, // Replace with relevant icon/image
  },
  {
    title: 'Property Management',
    description: 'We manage your property with professionalism, offering services like rent collection, maintenance, and more, ensuring stress-free ownership.',
    icon: kindelmedia, // Replace with relevant icon/image
  },
  {
    title: 'Real Estate Investment',
    description: 'Invest in high-return properties with our expert market analysis and tailored advice to help you grow your real estate portfolio.',
    icon: kindelmedia, // Replace with relevant icon/image
  },
];

const OurServices = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <section className="container mx-auto py-12 px-6 bg-[#FFF5EE]">
      {/* Meta Tags for SEO */}
      <head>
        <title>Our Services | Ivory Home Limited</title>
        <meta
          name="description"
          content="Explore the services offered by Ivory Home Limited, including Residential Sales, Commercial Properties, Property Management, and Real Estate Investment. Let us help you find the perfect property."
        />
      </head>

      <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center" data-aos="fade-up">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered animation for each service
          >
            {/* Lazy Loaded Image */}
            <LazyLoadImage
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mb-4"
              effect="blur"
              wrapperProps={{
                style: {
                  transition: 'opacity 1s ease-in-out',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                },
              }}
            />
            <h3 className="text-xl font-bold text-[#005fa3]">{service.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
