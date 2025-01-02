import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Lottie from 'lottie-react';
import '../../styles/popup.css';
import NewsletterAnimation from '../../assets/images/Animation - 1734539815136.json';

const NewsletterPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupKey = 'newsletterPopup';
        const expirationTime = 24 * 60 * 60 * 1000; 

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
            const scrollThreshold = document.body.scrollHeight * 0.8; 

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
        const popupKey = 'newsletterPopup';
        const expirationTime = 24 * 60 * 60 * 1000; 

        
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
                {/* Close Button */}
                <button className="close-btn text-red-500" onClick={handlePopupClose}>
                    <FaTimes size={20} />
                </button>

                {/* Popup Content */}
                <h2>Stay Connected!</h2>
                <p>Subscribe to get the latest updates, exclusive property listings, and real estate news delivered to your inbox.</p>

                {/* Lottie Animation */}
                <div className="lottie">
                    <Lottie animationData={NewsletterAnimation} loop={true} style={{ height: 250, width: 450 }} />
                </div>
            </div>
        </div>
    );
};

export default NewsletterPopup;
