import React from 'react';
import showcase from '../../assets/images/showcase.jpg';
import logo from '../../assets/images/logo.png';
import { FaSearch, FaHome } from 'react-icons/fa'; // Using FontAwesome icons
import '../../styles/showcase.css';

const BlogShowCase = () => {
  const goToHome = () => {
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="">
      <div className="showcase">
        <img src={showcase} alt="Showcase" className="showcase-image" />
        
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Search Icon and Input */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Home Icon */}
        <div className="home-container" onClick={goToHome}>
          <FaHome className="home-icon" />
        </div>
      </div>
    </div>
  );
};

export default BlogShowCase;
