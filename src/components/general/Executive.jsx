import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import kindelmedia from '../../assets/images/kindelmedia.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';


// Sample executives' data
const executives = [
  {
    name: 'John Doe',
    position: 'Chief Executive Officer',
    description: 'John brings over 20 years of experience in the real estate industry, leading our team with passion and strategic vision.',
    image: kindelmedia,
  },
  {
    name: 'Jane Smith',
    position: 'Chief Operating Officer',
    description: 'Jane oversees daily operations, ensuring efficiency and excellence in every aspect of our services.',
    image: kindelmedia,
  },
  {
    name: 'Robert Johnson',
    position: 'Chief Financial Officer',
    description: 'With a keen eye for detail, Robert manages our finances, ensuring stability and growth for the company.',
    image: kindelmedia,
  },
];

const Executive = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);

  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Meet Our Executives | Ivory Home Limited</title>
        <meta
          name="description"
          content="Meet the executive team at Ivory Home Limited. Discover the leaders behind our success in delivering exceptional real estate solutions."
        />
        <meta
          name="keywords"
          content="Ivory Home Limited, real estate executives, leadership team, real estate leaders, CEO, COO, CFO, real estate solutions, property management, real estate consultancy"
        />
        <meta name="author" content="Ivory Home Limited" />
      </Helmet>


      <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center">
          Meet Our Executives
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {executives.map((executive, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white" data-aos="fade-up" data-aos-delay="100">
                <LazyLoadImage
                  src={executive.image}
                  alt={executive.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                  effect="blur"

                  
                />
                <h3 className="text-xl font-bold text-[#005fa3]">{executive.name}</h3>
                <p className="text-sm text-gray-500 font-semibold">{executive.position}</p>
                <p className="text-sm text-gray-700 mt-2">{executive.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Executive;
