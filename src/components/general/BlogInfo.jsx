import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/post.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "../blog/Spinner";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const BlogInfo = () => {
  const { id } = useParams(); 
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]); // Renamed from properties to posts
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = window.env.VITE_BASE_URL;
  const CLOUD_URL = window.env.VITE_CLOUD_URL;


  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${BASE_URL}/blog/posts/?limit=5`);
      setPosts(res.data.results); 
    } catch (err) {
      setError("Failed to load blog. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    AOS.init(); // Initialize AOS for animations
  }, []);

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner loading={true} size={20} />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="mt-8 container mx-auto py-12 px-6 bg-black">
      <h2 className="text-4xl sm:text-3xl font-bold text-center mb-6 text-[#005fa3] custom-text-shadow animate-slide-in">
        Latest Blog Posts
      </h2>

      <Swiper
        autoplay={{
          delay: 3000, // autoplay delay in ms
          disableOnInteraction: false, // continue autoplay even after user interacts
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
          },
        }}
        spaceBetween={20} // Space between slides
        className="mySwiper"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div
              className="h-85 border bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleCardClick(post.id)} // Corrected navigation
              data-aos="fade-up" // Apply AOS animation
            >
              {/* Blog Image */}
              {post.image ? (
                <img
                  src={`${CLOUD_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-72 object-cover"  // Increased the height of the image
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-72 bg-gray-300 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}

              {/* Blog Details */}
              <div className="p-4 h-1/3">
                <h3 className="text-lg font-semibold mb-1 text-white">{post.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogInfo;
