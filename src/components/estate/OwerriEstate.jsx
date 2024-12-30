import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import owerriInfo from '../../assets/images/royalInfo.jpeg'; 
import NdiobaGallary from './NdiobaGallary';
import SubscriptionFormOwerri from './SubscriptionFormOwerri';

const OwerriEstate = () => {

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
                <title>Owerri Estate - Luxury Living in Harmony</title>
                <meta
                    name="description"
                    content="Discover Owerri Estate, a premium residential area offering luxury, comfort, and convenience. Make your dream home a reality in this prestigious estate."
                />
                <meta
                    name="keywords"
                    content="Owerri Estate, luxury homes, premium community, real estate, modern housing, exclusive neighborhood"
                />
                <meta name="author" content="Owerri Real Estate" />
            </Helmet>

            {/* Introduction Section */}
            <section className="mb-12">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#007acc]">
                        Owerri Estate
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
                    {/* Left Content */}
                    <div data-aos="fade-left">
                        <p className="text-gray-700 mt-4">
                            Step into the world of elegance and sophistication at Owerri Estate, a destination where luxury meets practicality. Situated in a thriving area, this estate offers a harmonious blend of exclusivity and accessibility.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Owerri Estate redefines modern living with features such as:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Architecturally designed luxury homes</li>
                            <li>24/7 gated security for peace of mind</li>
                            <li>Eco-friendly green spaces</li>
                            <li>Exclusive clubhouse and fitness facilities</li>
                            <li>Close proximity to business districts and entertainment hubs</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Owerri Estate is not just a place to live—it's a lifestyle. Elevate your living experience by becoming part of this premium community today.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center" data-aos="fade-right">
                        <img
                            className="rounded-lg shadow-lg w-full h-80 object-cover"
                            src={owerriInfo}
                            alt="Owerri Estate Thumbnail"
                        />
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="text-center mt-8">
                    <button className="px-8 py-3 text-lg font-semibold text-white bg-[#007acc] rounded-lg shadow-lg hover:bg-[#005fa3] hover:scale-105 transform transition-all duration-300" onClick={handleConfirmClick}>
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
                        className="px-6 py-3 text-base font-semibold text-white bg-[#005fa3] rounded-lg shadow-md hover:bg-[#003f72] transition-all duration-300"
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
            {showPopup && <SubscriptionFormOwerri showPopup={showPopup} closePopup={closePopup} />}
        </div>
    );
};

export default OwerriEstate;
