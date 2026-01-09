import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie, FaCogs, FaRegHandshake, FaThLarge } from 'react-icons/fa';

const reasons = [
  {
    title: 'Expert Guidance',
    description:
      'Our experienced team provides you with expert advice every step of the way, ensuring you make the best real estate decisions. With an 85% Repeat Client Rate, our clients trust us to guide them through every transaction.',
    icon: <FaUserTie className="text-[#005fa3] w-6 h-6 mr-2" />,
  },  
  {
    title: 'Tailored Solutions',
    description:
      'We offer customized solutions that fit your unique needs, whether buying, selling, or renting properties. With over 1500 successful transactions, we ensure that every solution is designed for your success.',
    icon: <FaCogs className="text-[#005fa3] w-6 h-6 mr-2" />,
  },  
  {
    title: 'Transparency & Trust',
    description:
      'We believe in full transparency and building trust with our clients. With a 95% Customer Satisfaction Rate, you can rely on us for honest advice, no hidden fees, and a commitment to your satisfaction.',
    icon: <FaRegHandshake className="text-[#005fa3] w-6 h-6 mr-2" />,
  }
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      
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
          loop={false}
          className="swiper-container"
        >
          {reasons.map((reason, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300">
                <div className="flex items-center justify-center mb-4 px-0">
                  {reason.icon}
                  <h3 className="text-xl font-bold text-[#005fa3]">{reason.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mt-2">{reason.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>

        {/* Grid on larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center mb-4">
                {reason.icon}
                <h3 className="text-xl font-bold text-[#005fa3]">{reason.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
