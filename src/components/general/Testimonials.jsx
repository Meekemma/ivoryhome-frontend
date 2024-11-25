import React, { useEffect,useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Adjusted import
import kinde from '../../assets/images/kinde.jpg';
import kindelmedia from '../../assets/images/kindelmedia.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Testimonials = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);


  const testimonies = [
    {
      text: "This product has completely transformed the way I handle my daily tasks. It's intuitive, reliable, and truly innovative!",
      name: 'Meekemma',
      avatar: kinde,
    },
    {
      text: "I can't recommend this enough! It's a game-changer for anyone looking to streamline their workflow effortlessly.",
      name: 'Grace Ofena',
      avatar: kindelmedia,
    },
    {
      text: "Outstanding experience! The quality and attention to detail are unmatched. I’ll definitely be a returning customer.",
      name: 'Paul Emma',
      avatar: kindelmedia,
    },
    {
      text: "The level of professionalism and care is remarkable. I've never felt more valued as a client. Kudos to the team!",
      name: 'Kelechi Uju',
      avatar: kinde,
    },
    {
      text: "Exceptional service! The team went above and beyond to ensure everything was perfect. Highly impressed!",
      name: 'John Doe',
      avatar: kinde,
    },
    {
      text: "This is hands down the best purchase I’ve made this year. Superb quality and excellent customer service.",
      name: 'Stanley Paul',
      avatar: kinde,
    },
    {
      text: "I love everything about this! From the design to the functionality, it exceeds all my expectations.",
      name: 'Peter Uche',
      avatar: kindelmedia,
    },
    {
      text: "Great value for money. The performance and usability are second to none. I’m extremely satisfied!",
      name: 'Michael T-Pain',
      avatar: kindelmedia,
    },
  ];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="container test mx-auto px-6 py-12 mt-16 bg-[#FFF5EE]">
      <div className="flex justify-center text-center mb-8" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap">
            What Our Clients Say
          </h1>
          <p className="text-base md:text-lg lg:text-xl px-4 md:px-8 lg:px-16 leading-relaxed">
            Our clients' satisfaction is our top priority. Here’s what some of them have to say about their experiences with our services.
            We take pride in delivering exceptional results that speak for themselves!
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide for smaller screens
            1024: { slidesPerView: 3 }, // Show 3 slides for larger screens (desktops)
          }}
          className="mySwiper py-4"
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-card p-6 text-center border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={testimony.avatar}
                  alt={`${testimony.name}'s avatar`}
                  className="w-16 h-16 mb-4 rounded-full mx-auto"
                />
                <p className="mb-4 text-lg italic text-gray-700">“{testimony.text}”</p>
                <p className="font-bold text-[#005fa3]">{testimony.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Button */}
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md"
          style={{ zIndex: 10 }}
        >
          &#9654; {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
