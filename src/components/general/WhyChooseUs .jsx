import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  {
    title: 'Expert Guidance',
    description:
      'Our experienced team provides you with expert advice every step of the way, ensuring you make the best real estate decisions.',
  },
  {
    title: 'Tailored Solutions',
    description:
      'We offer customized solutions that fit your unique needs, whether buying, selling, or renting properties.',
  },
  {
    title: 'Transparency & Trust',
    description:
      'We believe in full transparency and building trust with our clients. You can rely on us for honest advice and no hidden fees.',
  },
  {
    title: 'Wide Range of Properties',
    description:
      'We offer a wide selection of residential, commercial, and investment properties to suit every need and budget.',
  },
];

const WhyChooseUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Why Choose Ivory Home Limited | Expert Real Estate Solutions</title>
      <meta
        name="description"
        content="Discover why Ivory Home Limited is your best choice for real estate. Learn about our expert guidance, tailored solutions, transparency, and wide range of properties."
      />

      <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center" data-aos="fade-up">
          Why Choose Us
        </h2>

        {/* Swiper on small screens */}
        <div className="block sm:hidden" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="swiper-container"
          >
            {reasons.map((reason, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300">
                  <h3 className="text-xl font-bold text-[#005fa3]">{reason.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{reason.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid on larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation for grid items
            >
              <h3 className="text-xl font-bold text-[#005fa3]">{reason.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
