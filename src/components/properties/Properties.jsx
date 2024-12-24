import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./ProSpinner";
import PropertyPagination from "./PropertyPagination";
import { Helmet } from 'react-helmet-async';
import { useSearch } from '../../context/SearchContext'

const Properties = () => {
  const { searchQuery } = useSearch();
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;
  const propertyPerPage = 10;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page"), 10) || 1;
    setCurrentPage(page);
  }, [location.search]);

  const fetchProperties = async (page) => {
    const offset = (page - 1) * propertyPerPage;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL}/commerce/properties/?limit=${propertyPerPage}&offset=${offset}&q=${searchQuery}`
      );
      setProperties(response.data.results);
      setTotalPages(Math.ceil(response.data.count / propertyPerPage));
    } catch (error) {
      setError("Failed to load Properties. Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage, searchQuery]);

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      navigate(`?page=${page}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
      <section className="relative p-4">
         <Helmet>
          <title>Properties | Ivory Home Limited</title>
          <meta
            name="description"
            content="Explore the services offered by Ivory Home Limited, including Residential Sales, Commercial Properties, Property Management, and Real Estate Investment. Let us help you find the perfect property."
          />
          <meta 
            name="keywords" 
            content="properties, real estate, residential sales, commercial properties, property management, real estate investment, Ivory Home Limited" 
          />
        </Helmet>
        {/* Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-screen">
            <Spinner loading={true} size={40} />
          </div>
        )}
    
        {/* Properties List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
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
                <div className="w-full h-72 bg-gray-300 flex items-center justify-center rounded-t-lg">
                  <span>No Image</span>
                </div>
              )}
    
              {/* Property Details */}
              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <h5 className="text-base font-semibold">{property.title}</h5>
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
          ))}
        </div>
    
        {/* Pagination */}
        <div className="mt-6">
          <PropertyPagination
            count={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    );
};

export default Properties;
