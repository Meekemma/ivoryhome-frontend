import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel from '../../assets/images/carousel.jpg';
import home from '../../assets/images/home.jpg';
import homesale from '../../assets/images/homesale.jpg';
import '../../styles/carousel.css';
import Spinner from "../blog/Spinner";

const MyCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      src: carousel,
      title: 'Find Your Dream Home',
      description:
        'Explore top properties in the most desirable neighborhoods. Your dream home is just a click away!',
      buttonText: 'Book Inspection',
    },
    {
      id: 2,
      src: home,
      title: 'Experience Modern Living',
      description:
        'Discover tailored solutions for luxury living. Schedule your property inspection today!',
      buttonText: 'Book Inspection',
    },
    {
      id: 3,
      src: homesale,
      title: 'Own Your Future Home',
      description:
        'Browse exquisite properties to find the perfect match for your lifestyle. Start your journey today!',
      buttonText: 'Book Inspection',
    },
  ];


  // Duplicate slides to create a loop effect
  const duplicatedSlides = [...slides, ...slides];

  // Handle navigation to the booking page
  const handleOnClick = () => {
    navigate('/booking');
  };

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = duplicatedSlides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.src;
          img.onload = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    preloadImages();
  }, [duplicatedSlides]);

  return (
    <div className="carousel-container">
      {!isLoading && (
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          interval={5000}
          transitionTime={500}
          className="custom-carousel"
          swipeable={!isMobile} 
        >
          {duplicatedSlides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                loading="lazy"
              />
              <div className="overlay">
                <div className="text-content">
                  
                  <h2>{slide.title}</h2>
                  <p className='text-5xl'>{slide.description}</p>
                  <button className="booking-button" onClick={handleOnClick}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
      {isLoading && (
        <div className="loading-placeholder">
          <Spinner size={20} color="#fff" />
        </div>
      )}
    </div>
  );
};

export default MyCarousel;
