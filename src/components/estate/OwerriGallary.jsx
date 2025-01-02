import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import owerisolar from '../../assets/images/owerisolar.jpg';
import owerriestate from '../../assets/images/owerriestate.jpg';
import owerriplan from '../../assets/images/owerriplan.jpg';
import owerriplant from '../../assets/images/owerriplant.jpg';
import owerriview from '../../assets/images/owerriview.jpg';



import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const royals = [
  { image: owerisolar },
  { image: owerriestate },
  { image: owerriplan },
  { image: owerriplant },
  { image: owerriview },
];

const OwerriGallary = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        showIndicators={false}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              data-aos="fade-up"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default OwerriGallary