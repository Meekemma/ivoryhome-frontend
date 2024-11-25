import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie from lottie-react
import animation from '../assets/images/Animation.json'; // Import animation JSON

import '../styles/main.css';

const PageNotFound = () => {

  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <section className="text-center flex flex-col justify-center items-center h-screen">
      {/* Render Lottie Animation with larger size */}
      <Lottie animationData={animation} loop={true} className="w-96 h-96" />  {/* Increase size here */}

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="text-white bg-red-500 rounded-md px-3 py-2 mt-4 hover:bg-red-600"
      >
        Go Back
      </button>
    </section>
  );
};

export default PageNotFound;
