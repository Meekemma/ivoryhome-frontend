import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Spinner from "../blog/Spinner";
import "../../styles/carousel.css";

const PropertyInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;


  const fetchProperties = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${BASE_URL}/commerce/properties/?limit=5`);
      setProperties(res.data.results);
    } catch (err) {
      setError("Failed to load properties. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/property/${id}`); // Navigate to the property details page
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner loading={true} size={40} />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="mt-8 container mx-auto py-12 px-6">
      <h2
        className="text-4xl sm:text-3xl font-bold text-center mb-6 text-[#005fa3] custom-text-shadow animate-slide-in"
      >
        Find Your Dream Home
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div
              className="h-85 border bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleCardClick(property.id)}
            >
              {/* Property Image */}
              {property.images.length > 0 ? (
                <div className="w-full h-64 overflow-hidden">
                <img
                  src={`${CLOUD_URL}${property.images[0].image}`}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                </div>
              ) : (
                <div className="w-full h-2/3 bg-gray-300 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}

              {/* Property Details */}
              <div className="p-4 h-1/3">
              <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold">{property.title}</h3>
                  {/* Single Star Rating */}
                  <div className="flex items-center">
                    <span className="text-sm font-bold">5.0</span>
                    <span className="ml-1 text-yellow-500">&#9733;</span>
                  </div>
                </div>
                <div className="py-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-semibold">Price</span>
                  <span className="text-gray-600">#{property.price}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 font-semibold">Location</span>
                  <span className="text-gray-500">{property.location}</span>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertyInfo;
