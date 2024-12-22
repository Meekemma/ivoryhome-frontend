import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation, useMatch   } from 'react-router-dom';
import Lottie from 'lottie-react';
import '../../styles/popup.css';
import AnimationPop from '../../assets/images/Animation - 1734531753860.json';

const PropertyPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

        // Show popup after 15 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 20000);

        return () => clearTimeout(timer); 
    }, [expirationTime]);

    const handlePopupClose = () => {
        const popupKey = 'propertyPopup';

        // Save the current time + expiration time to localStorage
        const popupData = {
            expiry: Date.now() + expirationTime,
        };

        localStorage.setItem(popupKey, JSON.stringify(popupData));
        setShowPopup(false);
    };


     // List of paths where the popup should not appear
    const excludedPaths = [
        '/properties', '/property/:id', '/request', '/checkout/summary', '/payment', '/success', 
        '/profile/:user_id', '/order/:id', '/cookie-policy', '/privacy-policy', '/terms-and-conditions',
        '/reset_password_confirm', '/verification', '/reset_password', '/change_password', '/signup', '/login'
    ];

    // Check if the current path matches any of the excluded paths
    const isExcluded = excludedPaths.some((path) => useMatch(path));

    // If the current path is in the excludedPaths array, don't show the popup
    if (isExcluded) {
        return null;
    }
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
                        handlePopupClose(); // Close the popup
                        navigate('/properties'); // Navigate to the properties page
                    }}
                >
                    View Properties
                </button>
            </div>
        </div>
    );
};

export default PropertyPopup;
