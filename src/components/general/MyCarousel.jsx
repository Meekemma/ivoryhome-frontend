import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel from '../../assets/images/carousel.jpg';
import home from '../../assets/images/home.jpg';
import '../../styles/carousel.css';

const MyCarousel = () => {
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
  ];

  // Duplicate slides to create a loop effect
  const duplicatedSlides = [...slides, ...slides];

  // Handle navigation to the booking page
  const handleOnClick = () => {
    navigate('/booking');
  };

  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={5000}
        transitionTime={500}
        className="custom-carousel"
        swipeable={!isMobile} // Prevent swipe on mobile if necessary
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
                <h5>{slide.title}</h5>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="booking-button" onClick={handleOnClick}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
