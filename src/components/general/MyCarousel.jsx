import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carousel from '../../assets/images/carousel.jpg';
import home from '../../assets/images/home.jpg';
import homesale from '../../assets/images/homesale.jpg';
import '../../styles/carousel.css';
import Spinner from '../blog/Spinner';

const MyCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide) => {
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
  }, [slides]);

  // Handle button click
  const handleOnClick = () => {
    navigate('/booking');
  };

  return (
    <div className="carousel-container">
      {!isLoading ? (
        <div className="carousel-slide">
          <img
            src={slides[currentSlide].src}
            alt={`Slide ${currentSlide + 1}`}
            className="carousel-image"
            loading="lazy"
          />
          <div className="overlay">
            <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white' }}>
              Rc. 1748963
            </div>
            <div className="text-content">
              <h2>{slides[currentSlide].title}</h2>
              <p className="text-5xl">{slides[currentSlide].description}</p>
              <button className="booking-button" onClick={handleOnClick}>
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading-placeholder">
          <Spinner size={20} color="#fff" />
        </div>
      )}
    </div>
  );
};

export default MyCarousel;