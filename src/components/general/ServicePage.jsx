import React, { useEffect } from 'react';
import { FaHome, FaTools, FaChartLine, FaBuilding } from 'react-icons/fa'; // Importing icons from React Icons
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const services = [
  {
    title: "Residential Rent/Sale",
    description:
      "We help you find your dream home. Whether renting or buying, we offer a curated selection of residential properties that suit your needs and budget.",
    icon: <FaHome className="w-16 h-16 text-[#005fa3] mx-auto" />, // Home icon for Residential Sales
  },
  {
    title: "Property Management",
    description:
      "Our property management service ensures your property is well-maintained and profitable. From tenant screening to regular maintenance, we handle it all.",
    icon: <FaTools className="w-16 h-16 text-[#005fa3] mx-auto" />, // Tools icon for Property Management
  },
  {
    title: "Real Estate Investment",
    description:
      "Explore lucrative investment opportunities in the real estate market. We provide expert guidance to maximize your returns.",
    icon: <FaChartLine className="w-16 h-16 text-[#005fa3] mx-auto" />, // Chart icon for Real Estate Investment
  },
  {
    title: "Real Estate Management",
    description:
      "Comprehensive real estate management solutions tailored to your portfolio. Let us take the hassle out of managing your properties.",
    icon: <FaTools className="w-16 h-16 text-[#005fa3] mx-auto" />, // Tools icon for Real Estate Management (same as Property Management)
  },
  {
    title: "Real Estate Consultancy",
    description:
      "Get professional advice on real estate transactions and strategies. Our consultancy services are designed to meet your unique needs.",
    icon: <FaChartLine className="w-16 h-16 text-[#005fa3] mx-auto" />, // Chart icon for Real Estate Consultancy (same as Investment)
  },
  {
    title: "Commercial Properties",
    description:
      "We specialize in leasing and selling commercial properties, including office spaces, retail outlets, and warehouses.",
    icon: <FaBuilding className="w-16 h-16 text-[#005fa3] mx-auto" />, // Building icon for Commercial Properties
  },
];

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 bg-[#F9FAFB]">
      {/* Header */}
      <section className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          At Ivory Home Limited, we provide a wide range of real estate services designed to meet your every need.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6 flex justify-center items-center">
              {service.icon}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#005fa3] mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="text-center mt-12" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-bold text-[#005fa3] mb-4">
          Ready to Work with Us?
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Get in touch to learn more about our services or to start your real estate journey with us.
        </p>
        <a
          href="/contact"
          className="bg-[#005fa3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#003f73] transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
