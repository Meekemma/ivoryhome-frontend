import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import indiobiInfo from '../../assets/images/royalInfo.jpeg';
import NdiobaGallary from './NdiobaGallary';
import SubscriptionFormNdiobi from './SubscriptionFormNdiobi';
import '../../styles/main.css';


const IndiobiEstate = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleConfirmClick = async (e) => {
            setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    const navigate = useNavigate();

    const handleScheduleVisit = () => {
        navigate('/booking');
    };

    const handleContactUs = () => {
        navigate('/contact');
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        return () => AOS.refresh();
    }, []);

    return (
        <div className="container mx-auto py-8 px-6 bg-[#f8f8f8]">
            {/* Meta Tags for SEO */}
            <Helmet>
                <title>Indiobi Estate - Modern Living Redefined</title>
                <meta
                    name="description"
                    content="Explore Indiobi Estate, a serene and contemporary residential area designed to redefine modern living. Experience comfort and community like never before."
                />
                <meta
                    name="keywords"
                    content="Indiobi Estate, modern homes, serene community, real estate, housing, family-friendly environment"
                />
                <meta name="author" content="Indiobi Real Estate" />
            </Helmet>

            {/* Introduction Section */}
            <section className="mb-12">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#007acc]">
                        Indiobi Estate
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    {/* Left Content */}
                    <div data-aos="fade-left">
                        <p className="text-gray-700 mt-4">
                            Discover tranquility and community at Indiobi Estate, where modern design meets serene living. Nestled in the heart of nature, our estate is crafted for families and individuals seeking a peaceful and sustainable lifestyle.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Indiobi Estate offers a blend of functionality and elegance with features that include:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Spacious and customizable homes</li>
                            <li>Community parks and playgrounds</li>
                            <li>Reliable water and power supply</li>
                            <li>Advanced security systems</li>
                            <li>Proximity to schools, shopping centers, and recreational facilities</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            With its prime location and modern amenities, Indiobi Estate is the perfect place to call home. Come and experience a life of comfort and connection at Indiobi Estate.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center" data-aos="fade-right">
                        <img
                            className="rounded-lg shadow-lg w-full h-80 object-cover"
                            src={indiobiInfo}
                            alt="Indiobi Estate Thumbnail"
                        />
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="text-center mt-8">
                    <button className="px-8 py-3 text-lg font-semibold text-white btn bg-[#007acc] rounded-lg shadow-lg hover:bg-[#005fa3] hover:scale-105 transform transition-all duration-300" onClick={handleConfirmClick}>
                        Purchase Now
                    </button>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="mb-12">
                <NdiobaGallary />

                {/* Flex Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                    <button
                        className="px-6 py-3 text-base font-semibold text-white btn bg-[#005fa3] rounded-lg shadow-md hover:bg-[#003f72] transition-all duration-300"
                        onClick={handleScheduleVisit}
                    >
                        Schedule a Visit
                    </button>
                    <button
                        className="px-6 py-3 text-base font-semibold text-black bg-[#f0f0f0] rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300"
                        onClick={handleContactUs}
                    >
                        Contact Us
                    </button>
                </div>
            </section>
            {showPopup && <SubscriptionFormNdiobi showPopup={showPopup} closePopup={closePopup} />}
        </div>
    );
};

export default IndiobiEstate;
