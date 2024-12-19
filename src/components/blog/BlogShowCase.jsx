import React, { useState } from 'react';
import blog from '../../assets/images/blog.jpg';
import AnimationBlog from '../../assets/images/Animation - 1734538556727.json';
import Lottie from 'lottie-react';
import { FaSearch } from 'react-icons/fa'; // Using FontAwesome icons
import '../../styles/showcase.css';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner'; // Import the Spinner component

const BlogShowCase = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.key === 'click') {
      setSearchQuery(inputValue);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when the image is loaded
  };

  return (
    <div className="">
      <div className="showcase">
        {isLoading && (
          <div className='loading-blog'>
            <Spinner size={20} color="#fff" /> 
          </div>
        )}
        <img
          src={blog}
          alt="Showcase"
          className="showcase-image"
          onLoad={handleImageLoad} // Trigger loading state change on image load
          style={{ display: isLoading ? 'none' : 'block' }} // Hide image until loaded
        />
        
        {/* Logo */}
        <div className="logo-container">
          <Lottie animationData={AnimationBlog} loop={true} style={{ height: 150, width: 100 }} />
        </div>

        {/* Search Icon and Input */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSearch} 
          />
        </div>
      </div>
    </div>
  );
};

export default BlogShowCase;