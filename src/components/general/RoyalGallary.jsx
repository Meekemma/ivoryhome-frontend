import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import royal from '../../assets/images/royal.jpg';
import royal_one from '../../assets/images/royal_one.jpg';
import royal_two from '../../assets/images/royal_two.jpg';
import royal_three from '../../assets/images/royal_three.jpg';
import royal_four from '../../assets/images/royal_four.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const royals = [
  { image: royal },
  { image: royal_one },
  { image: royal_two },
  { image: royal_three },
  { image: royal_four },
];

const RoyalGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
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
        {royals.map((item, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage
              src={item.image}
              alt={`Real estate image ${index + 1}`}
              className="w-full h-80 rounded-lg object-cover"
              effect="blur"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoyalGallery;
