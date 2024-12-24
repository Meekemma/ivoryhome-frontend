import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";
import { FiShare2, FiArrowLeft, FiInfo, FiMapPin, FiHome  } from "react-icons/fi"; 
import { FaMoneyBillWave, FaHouseUser } from "react-icons/fa";
import Spinner from "./ProSpinner";
import AOS from "aos";
import useAxios from "../../utils/useAxios";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';
import { useCookies } from "react-cookie";


const Property = () => {

  const [cookies] = useCookies(["access_token"]);

  const isAuthenticated = cookies.access_token;

  
  
  let api = useAxios();
  const { id } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [property, setProperty] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false); 

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;
  
  const previousPage = location.state?.from || "/properties";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchProperty = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/commerce/property/${id}/`);
        setProperty(response.data);
      } catch (err) {
        toast.error("Failed to load the property. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.info("Please login or signup to be able to add properties to cart.");
      return;
    }
  
    setButtonLoading(true);
  
    const orderData = {
      order_items: [
        {
          property_listing: property.id,
          quantity: 1,
        },
      ],
    };
  
    try {
      await api.post(`${BASE_URL}/commerce/orders/`, orderData);
      toast.success("Property successfully shortlisted. Check your cart to proceed.");
    } catch (error) {
      toast.error("Failed to add the property to the cart. Please try again.");
    } finally {
      setButtonLoading(false);
    }
  };
  

  const handleShare = () => {
    navigator.share
      ? navigator.share({
          title: property.title,
          text: `Check out this property: ${property.title}`,
          url: window.location.href,
        })
      : toast.info("Sharing not supported in your browser.");
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner loading={true} size={40} />
      </div>
    );
  if (!property) return null;

  return (
    <section className="p-4 max-w-7xl mx-auto text-white"> 
        <Helmet>
          <title>Property | Ivory Home Limited</title>
          <meta
            name="description"
            content="Explore the services offered by Ivory Home Limited, including Residential Sales, Commercial Properties, Property Management, and Real Estate Investment. Let us help you find the perfect property."
          />
          <meta 
            name="keywords" 
            content="properties, real estate, residential sales, commercial properties, property management, real estate investment, Ivory Home Limited" 
          />
        </Helmet>
      {/* Back Link */}
      <div className="flex justify-between items-center mb-4">
        <Link
          to={previousPage}
          className="flex items-center bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FiArrowLeft className="mr-2 text-lg" />
          Back to Properties
        </Link>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FiShare2 className="text-lg mr-2" />
          Share
        </button>
      </div>

      {/* Property Details */}
      <div className="border rounded-lg shadow-md p-6 bg-white text-black" data-aos="fade-up">
        <h1 className="text-pretty font-bold mb-4">{property.title}</h1>

        {/* Property Images */}
        <div className="hidden md:flex flex-col md:flex-row gap-4">
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={`${CLOUD_URL}${property.images[0].image}`}
              alt="Main Property"
              className="w-full h-[450px] object-cover rounded-lg"
              loading="lazy"
              style={{ aspectRatio: "16/9" }} 
            />
          </div>

          {/* Smaller Images (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-4 flex-none w-[30%]">
            {property.images.slice(1, 5).map((img, index) => (
              <img
                key={img.id}
                src={`${CLOUD_URL}${img.image}`}
                alt={`Property Image ${index + 2}`}
                className="w-full h-[200px] object-cover rounded-lg"
                loading="lazy" 
                style={{ aspectRatio: "1/1" }} 
              />
            ))}
          </div>
        </div>

        {/* Swiper for Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {property.images.map((img, index) => (
              <SwiperSlide key={img.id}>
                <img
                  src={`${CLOUD_URL}${img.image}`}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-[450px] object-cover rounded-lg"
                  loading="lazy" 
                  style={{ aspectRatio: "16/9" }} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Property Info Section */}
        <div className="border rounded-lg p-6 mt-4 bg-white text-black" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6">
            {/* Price Card */}
            <div
              className="border-2 rounded-lg p-6 shadow-lg bg-white text-black"
              style={{ borderColor: "#005fa3", width: "100%", maxWidth: "400px" }}
            >
              <p className="text-gray-600 text-sm">Total Price</p>
              <h2 className="text-3xl font-bold text-[#005fa3]">#{property.price}</h2>

             
             {/* Add to Cart Button */}
             <button
              className={`mt-4 w-full py-2 px-4 ${
                isAuthenticated
                  ? "bg-[#005fa3] hover:bg-[#004080] focus:ring-blue-500"
                  : "bg-[#005fa3] cursor-not-allowed"
              } text-white rounded-lg focus:outline-none flex items-center justify-center gap-2`}
              onClick={handleAddToCart}
              disabled={buttonLoading}
            >
              {buttonLoading ? (
                <Spinner loading={true} size={20} />
              ) : (
                <>
                  {property.listing_type === "rent" ? <FaMoneyBillWave /> : <FaHouseUser />}
                  {property.listing_type === "rent" ? "Rent" : "Purchase"}
                </>
              )}
            </button>


            </div>

            {/* Property Details */}
            <div className="flex-1 p-6 shadow-lg bg-white rounded-lg">
            <p className="flex items-center">
              <FiMapPin className="mr-2" /> 
              <strong className="text-red-500">Location:</strong> {property.location}
            </p>
            <div className="h-[2px] bg-gray-300 mb-4"></div>
            <p className="flex items-center">
              <FiHome className="mr-2 " /> 
              <strong className="text-red-500">Listing Type:</strong> {property.listing_type}
            </p>
               <div className="h-[2px] bg-gray-300 my-8"></div>
              <p>
              <strong className="flex items-center">
                <FiInfo className="mr-2"/>
                <span className="text-red-500">Description:</span>
              </strong>
                <span
                  dangerouslySetInnerHTML={{ __html: property.description }}
                ></span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
