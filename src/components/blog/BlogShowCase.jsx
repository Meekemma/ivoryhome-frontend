import React, { useState } from 'react';
import blog from '../../assets/images/blog.jpg';
import logo from '../../assets/images/logo.png';
import { FaSearch, FaChevronLeft  } from 'react-icons/fa'; // Using FontAwesome icons
import '../../styles/showcase.css';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const BlogShowCase = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchQuery } = useSearch();
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.key === 'click') {
      setSearchQuery(inputValue);
    }
  };

  

  return (
    <div className="">
      <div className="showcase">
        <img src={blog} alt="Showcase" className="showcase-image" />
        
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
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
            onKeyDown={handleSearch} // Trigger search on "Enter"
          />
        </div>

        
        
      </div>
    </div>
  );
};

export default BlogShowCase;
