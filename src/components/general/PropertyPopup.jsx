import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import '../../styles/popup.css';
import AnimationPop from '../../assets/images/Animation - 1734531753860.json';

const PropertyPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
   

    const expirationTime = 15 * 60 * 1000; 

    useEffect(() => {
        const popupKey = 'propertyPopup';

        // Check localStorage for the popup state
        const popupData = localStorage.getItem(popupKey);

        if (popupData) {
            const { expiry } = JSON.parse(popupData);
            const currentTime = Date.now();

           
            if (currentTime < expiry) {
                return;
            }
        }

        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = document.body.scrollHeight * 0.3; 

            if (scrollPosition > scrollThreshold) {
                setShowPopup(true);
                window.removeEventListener('scroll', handleScroll); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    const handlePopupClose = () => {
        const popupKey = 'propertyPopup';

        // Save the current time + expiration time to localStorage
        const popupData = {
            expiry: Date.now() + expirationTime,
        };

        localStorage.setItem(popupKey, JSON.stringify(popupData));
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="popup-container">
            <div className="popup">
                {/* Close button */}
                <button className="close-btn text-red-500" onClick={handlePopupClose}>
                    <FaTimes size={20} />
                </button>

                {/* Popup content */}
                <h2 className='text-pretty'>Discover Your Dream Home!</h2>
                <p className='text-pretty'>Explore our latest listings and find the perfect property for you.</p>

                
               {/* Lottie Animation */}
                <div className="lottie">
                    <Lottie animationData={AnimationPop} loop={true} style={{ height: 250, width: 450 }} />
                </div>


                {/* Navigation Button */}
                <button
                    className="navigate-btn"
                    onClick={() => {
                        handlePopupClose(); 
                        navigate('/properties'); 
                    }}
                >
                    View Properties
                </button>
            </div>
        </div>
    );
};

export default PropertyPopup;
