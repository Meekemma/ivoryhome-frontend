import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import '../../styles/popup.css';

const ProfilePopup = ({ showPopup, closePopup }) => {
    const [cookies] = useCookies(["user_id"]);
    const user_id = cookies.user_id;
    const navigate = useNavigate();


    const handleNavigation = () => {
        closePopup(); 
        navigate(`/profile/${user_id}`);
    };

  return (
    <div className={`popup-container ${showPopup ? 'show' : ''}`}>
      <div className="popup">
        <button className="close-btn text-red-500" onClick={closePopup}>
          <FaTimes size={20} />
        </button>
        <h2 className="text-pretty font-bold text-lg mb-2">
          Complete Your Profile to Proceed with Payment!
        </h2>
        <p className="text-gray-700 mb-6">
          To proceed with your transaction, please complete your profile. Update
          your details now to ensure a seamless payment process and unlock additional features.
        </p>
        <button className="navigate-btn" onClick={handleNavigation}>
          Complete Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;


