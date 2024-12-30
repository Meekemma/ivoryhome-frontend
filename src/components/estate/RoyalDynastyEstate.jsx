import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoyalGallery from './RoyalGallary';
import royalDynasty from '../../assets/videos/royal.mp4';
import royalInfo from '../../assets/images/royalInfo.jpeg';
import { FaPlay } from 'react-icons/fa';
import SubscriptionForm from './SubscriptionForm';


const RoyalDynastyEstate = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleConfirmClick = async (e) => {
            setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);


    const navigate = useNavigate();
    const handleScheduleVisit = () => {
        navigate('/booking'); 
      };
    
      const handleContactus = () => {
        navigate('/contact'); 
      };


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        return () => AOS.refresh();
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const videoContainerStyles = "relative rounded-lg shadow-lg w-full h-80 object-cover";

    return (
        <div className="container mx-auto py-8 px-6 bg-[#fff5ee]">
            {/* Meta Tags for SEO */}
            <Helmet>
                <title>Royal Dynasty Estate</title>
                <meta
                    name="description"
                    content="Discover luxury and comfort at Royal Dynasty Estate. Explore premium properties designed to elevate your lifestyle. Find your perfect home today!"
                />
                <meta
                    name="keywords"
                    content="Royal Dynasty Estate, luxury homes, premium properties, real estate, buy, rent, sell"
                />
                <meta name="author" content="Our Real Estate" />
            </Helmet>

            {/* Introduction Section */}
            <section className="mb-12">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#005fa3]">
                        Royal Dynasty Estate
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    {/* Left Content */}
                    <div data-aos="fade-left">
                        <p className="text-gray-700 mt-4">
                            Unlock a lifestyle of sophistication, luxury, and convenience at Royal Dynasty Estate. Designed for modern living, this estate combines elegant architecture, tranquil spaces, and premium amenities to create the ultimate haven for families and professionals.

                            Ideally situated for easy access to urban centers, Royal Dynasty Estate offers exquisite designs and top-tier craftsmanship in secure, peaceful neighborhoods. Residents can enjoy nearby world-class landmarks, including the Epe Resort Centre, Lekki International Airport, Lekki Deep Sea Port, Sinoma Cargo Port, and Pan-Atlantic University, enhancing both lifestyle and opportunities.

                            The estate is equipped with exclusive features to ensure unmatched comfort and convenience:
                            <ul className="list-disc pl-6">
                                <li>Secure perimeter fence</li>
                                <li>Well-maintained roadways</li>
                                <li>Illuminating streetlights</li>
                                <li>24/7 security</li>
                                <li>Uninterrupted electricity</li>
                                <li>Sustainable energy solutions</li>
                                <li>Clean water systems</li>
                                <li>Exquisite landscaping</li>
                            </ul>
                            Essential amenities such as a hospital, pharmacy, schools, a warehouse, and a mall are all within reach.

                            Royal Dynasty Estate delivers the perfect blend of elegance, functionality, and convenience. Discover your royal haven today.
                        </p>
                    </div>

                    {/* Right Video or Thumbnail */}
                    <div className="flex justify-center" data-aos="fade-right">
                        {isPlaying ? (
                            <video
                                className={videoContainerStyles}
                                controls
                                autoPlay
                                src={royalDynasty}
                                alt="Royal Dynasty Estate Video"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className={videoContainerStyles}>
                                <img
                                    className="rounded-lg w-full h-full object-cover"
                                    src={royalInfo}
                                    alt="Royal Dynasty Estate Thumbnail"
                                    onClick={handlePlayClick}
                                />
                                {/* Play Icon */}
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    <FaPlay />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button className="px-8 py-3 text-lg font-semibold text-white btn bg-black rounded-lg shadow-lg hover:bg-[#004080] hover:scale-105 transform transition-all duration-300" onClick={handleConfirmClick}>
                        Purchase Now
                    </button>
                </div>

                
            </section>

            {/* Gallery Section */}
            <section className="mb-12">
                <RoyalGallery />




                {/* Flex Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                    <button className="px-6 py-3 text-base font-semibold text-white bg-[#005fa3] rounded-lg shadow-md hover:bg-[#003f72] transition-all duration-300" onClick={handleScheduleVisit}>
                        Schedule a Visit
                    </button>
                    <button className="px-6 py-3 text-base font-semibold text-black bg-[#f0f0f0] rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300" onClick={handleContactus}>
                        Contact Us
                    </button>
                </div>


            </section>
            {showPopup && <SubscriptionForm showPopup={showPopup} closePopup={closePopup} />}
        </div>
    );
};

export default RoyalDynastyEstate;
