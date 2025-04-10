import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-200 text-gray-700 py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Privacy Policy and Cookie Settings */}
        <div className="text-sm text-center md:text-left">
          <a
            onClick={()=>navigate("/Privacy_&_Policy")} style={{ cursor: 'pointer' }} 
            className="hover:underline hover:text-gray-900"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <button
            onClick={()=>navigate("/Cookie_policy")} style={{ cursor: 'pointer' }}
            className="hover:underline hover:text-gray-900"
          >
            Cookie Settings
          </button>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Ivory Homes Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
