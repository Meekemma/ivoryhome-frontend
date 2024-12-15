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

  const BASE_URL = "http://127.0.0.1:8000";
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
          <div className="absolute top-0 left-0 w-full h-full">
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
                <img
                  src={`http://127.0.0.1:8000${property.images[0].image}`}
                  alt={property.title}
                  className="w-full h-82 object-cover rounded-t-lg"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-72 bg-gray-300 flex items-center justify-center rounded-t-lg">
                  <span>No Image</span>
                </div>
              )}
    
              {/* Property Details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold">{property.title}</h3>
                  {/* Single Star Rating */}
                  <div className="flex items-center">
                    <span className="text-sm font-bold">5.0</span>
                    <span className="ml-1 text-yellow-500">&#9733;</span>
                  </div>
                </div>
                <p className="text-gray-600">Price: #{property.price}</p>
                <p className="text-gray-500">Location: {property.location}</p>
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
