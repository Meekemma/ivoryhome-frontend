import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import kinde from '../../assets/images/kinde.jpg';
import kindelmedia from '../../assets/images/kindelmedia.jpg';
import '../../styles/carousel.css';

const MyCarousel = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

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
        showIndicators={true}
        showStatus={false}
        interval={3000}
        className="custom-carousel"
        swipeable={!isMobile} // Prevent swipe on mobile if necessary
      >
        {/* Slide 1 */}
        <div className="carousel-slide">
          <img
            src={kinde}
            alt="Slide 1"
            className="carousel-image"
            loading="lazy"
          />
          <div className="overlay">
            <div className="text-content">
              <h5>Find Your Dream Home</h5>
              <h2>Luxury Living, Perfect Location</h2>
              <p>
                Explore top properties in the most desirable neighborhoods. Your
                dream home is just a click away!
              </p>
              <button
                className="booking-button"
                onClick={handleOnClick}
              >
                Book Inspection
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
          <img
            src={kindelmedia}
            alt="Slide 2"
            className="carousel-image"
            loading="lazy"
          />
          <div className="overlay">
            <div className="text-content">
              <h5>Experience Modern Living</h5>
              <h2>Exclusive Homes for You</h2>
              <p>
                Discover tailored solutions for luxury living. Schedule your
                property inspection today!
              </p>
              <button
                className="booking-button"
                onClick={handleOnClick}
              >
                Book Inspection
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
