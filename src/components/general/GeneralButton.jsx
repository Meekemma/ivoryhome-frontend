


import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GeneralButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 bg-[#1d1c1c] text-white p-3 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default GeneralButton;
