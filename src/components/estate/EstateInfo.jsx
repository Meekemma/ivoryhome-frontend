import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import royalDynasty from '../../assets/videos/royal.mp4';
import royalInfo from '../../assets/images/royalInfo.jpeg';
import { FaPlay } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubscriptionForm from './SubscriptionForm';
import "../../styles/main.css";

const EstateInfo = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleConfirmClick = async (e) => {
          setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);



    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        return () => AOS.refresh();
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    }

    const videoContainerStyles = "relative rounded-lg shadow-lg w-full h-80 object-cover overflow-hidden";

    return (
        <div className="container mx-auto py-8 px-6 bg-[#fff5ee]">
            {/* Meta Tags for SEO */}
            <Helmet>
                <title>Find your dream home in Royal Dynasty Estate | Our Real Estate</title>
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
                    <h1 className="text-3xl md:text-5xl text-left font-bold text-[#005fa3]">
                        Welcome to Royal Dynasty Estate
                    </h1>
                    <p className="text-gray-700 text-base text-left mt-4">
                        Unlock a lifestyle of sophistication and luxury at Royal Dynasty Estate. Immerse yourself in modern living, surrounded by breathtaking homes and tranquil spaces. Your royal haven is just a step away.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    {/* Left Content */}
                    <div data-aos="fade-left">
                    <h5 className="text-lg text-gray-800 font-semibold mb-4 ">
                        Why You Should Invest in Royal Dynasty Estate
                    </h5>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Strategic locations with easy access to urban centers.</li>
                            <li>Exquisite designs and top-tier craftsmanship.</li>
                            <li>Secure, peaceful neighborhoods perfect for families.</li>
                            <li>Epe Resort Centre offers a world-class leisure experience.</li>
                            <li>Lekki International Airport ensures global connectivity.</li>
                            <li>Lekki Deep Sea Port is a key center for maritime trade.</li>
                            <li>Sinoma Cargo Port is a crucial logistics hub for efficient trade.</li>
                            <li>Pan-Atlantic University is a renowned educational institution.</li>
                        </ul>
                    </div>

                    {/* Right Video or Thumbnail */}
                    <div className="flex justify-center" data-aos="fade-right">
                    {isPlaying ? (
                        <video 
                            className={`${videoContainerStyles} w-full h-full`} 
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
                                className="rounded-lg w-full h-full object-contain" 
                                src={royalInfo} 
                                alt="Royal Dynasty Estate Thumbnail"
                                onClick={handlePlayClick}
                            />
                            
                            {/* Play Icon */}
                            <div 
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-2xl cursor-pointer beeping-button" 
                                onClick={handlePlayClick}
                            >
                                <FaPlay />
                            </div>

                        </div>
                    )}
                </div>

                </div>

                <div className="text-center mt-8">
                <button className="px-8 py-3 text-lg font-semibold text-white btn bg-black rounded-lg shadow-lg hover:bg-[#004080] hover:scale-105 transform transition-all duration-300"  onClick={handleConfirmClick}>
                    Purchase Now
                </button>


                </div>

            </section>
            {showPopup && <SubscriptionForm showPopup={showPopup} closePopup={closePopup} />}
        </div>
    );
};

export default EstateInfo;
