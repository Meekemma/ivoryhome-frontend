import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import '../../styles/popup.css';
import NewsletterAnimation from '../../assets/images/Animation - 1734539815136.json';

const NewsletterPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const popupKey = 'newsletterPopup';
        const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        // Check localStorage for the popup state
        const popupData = localStorage.getItem(popupKey);

        if (popupData) {
            const { expiry } = JSON.parse(popupData);
            const currentTime = Date.now();

            // If the current time is before the expiry, do not show the popup
            if (currentTime < expiry) {
                return;
            }
        }

        // Show popup based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = document.body.scrollHeight * 0.8; // 50% of the page height

            if (scrollPosition > scrollThreshold) {
                setShowPopup(true);
                window.removeEventListener('scroll', handleScroll); // Remove listener after showing popup
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    const handlePopupClose = () => {
        const popupKey = 'newsletterPopup';
        const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        // Save the current time + expiration time to localStorage
        const popupData = {
            expiry: Date.now() + expirationTime,
        };

        localStorage.setItem(popupKey, JSON.stringify(popupData));
        setShowPopup(false);
    };

     // List of paths where the popup should not appear
     const excludedPaths = ['/payment','/success','/cookie-policy','/privacy-policy','/terms-and-conditions','/reset_password_confirm','/verification','/reset_password','/change_password','/signup','/login'];

     // If the current path is in the excludedPaths array, don't show the popup
     if (excludedPaths.includes(location.pathname)) {
         return null;
     }

    if (!showPopup) return null;

    return (
        <div className="popup-container">
            <div className="popup">
                {/* Close Button */}
                <button className="close-btn text-red-500" onClick={handlePopupClose}>
                    <FaTimes size={20} />
                </button>

                {/* Popup Content */}
                <h2>Stay Connected!</h2>
                <p>Subscribe to get updates and the latest news directly.</p> 

                {/* Lottie Animation */}
                <div className="lottie">
                    <Lottie animationData={NewsletterAnimation} loop={true} style={{ height: 250, width: 450 }} />
                </div>
            </div>
        </div>
    );
};

export default NewsletterPopup;
