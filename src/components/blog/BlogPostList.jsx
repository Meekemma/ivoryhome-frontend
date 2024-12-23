import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/post.css';
import BlogPagination from './BlogPagination';
import axios from 'axios';
import truncate from 'html-truncate';
import { FaCalendarAlt, FaCommentAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from './Spinner';
import { Helmet } from 'react-helmet-async';
import { useSearch } from '../../context/SearchContext';
import event from '../../assets/images/event.jpeg';
import event_tip from '../../assets/images/even_tip.jpeg';
import event_clock from '../../assets/images/event_clock.jpeg';

const BlogPostList = () => {
  const { searchQuery } = useSearch();
  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;



  const postsPerPage = 5;

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = ()=>{
    navigate()
  }

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkMobile(); // Run on component mount
    window.addEventListener('resize', checkMobile); // Add resize listener

    return () => {
      window.removeEventListener('resize', checkMobile); // Clean up listener
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page'), 10) || 1;
    setCurrentPage(page); // Update currentPage state when location.search changes
  }, [location.search]);

  const fetchPosts = async (page) => {
    const offset = (page - 1) * postsPerPage;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL}/blog/posts/?limit=${postsPerPage}&offset=${offset}&q=${searchQuery}`
      );
      setPosts(response.data.results);
      setTotalPages(Math.ceil(response.data.count / postsPerPage));
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage, searchQuery]);

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      navigate(`?page=${page}`); // Update the URL with the current page
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="container px-4 py-8">
      <Helmet>
        <title>Our Blog | Ivory Home Limited</title>
        <meta
          name="description"
          content="Stay updated with the latest trends in real estate, tips for property buying and selling, market insights, and more on the Ivory Home Limited blog."
        />
        <meta
          name="keywords"
          content="Ivory Home Limited, real estate blog, property buying tips, property selling tips, real estate market trends, real estate news, property investment advice, home buying, home selling, real estate insights, property management tips, commercial property blog"
        />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner loading={loading} size={40} color="#3498db" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Blog Posts Section */}
          <div className="flex-[2] border-2 bg-gray-100 py-8 px-2 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 text-[#005fa3]">Latest Blog Posts</h1>

            {!error && posts.length === 0 && <p>No posts found. Please check back later!</p>}

            {posts.map((post) => (
              <section key={post.id} data-aos="fade-up">
                <article className="mb-6 border-b pb-4">
                  <h2
                    className="text-xl font-semibold text-[#005fa3] hover:glow-effect transition-all duration-300"
                  >
                    {post.title}
                  </h2>

                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <p className="text-sm text-gray-600 w-full sm:w-auto">
                      By {post.author} | Category: {post.category.name}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 w-full sm:w-auto mt-2 sm:mt-0">
                      <FaCalendarAlt className="mr-1" />
                      <span>Created: {formatDate(post.created_at)}</span>
                      <span className="mx-2">|</span>
                      <FaCalendarAlt className="mr-1" />
                      <span>Last Updated: {formatDate(post.updated_at)}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FaCommentAlt className="mr-1" />
                    <span>{post.comment_count} comments</span>
                  </div>

                  <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-6">
                    <img
                      src={`${CLOUD_URL}${post.image}`}
                      alt={post.title}
                      className="absolute w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="text-black-700"
                    dangerouslySetInnerHTML={{
                      __html: truncate(post.content, 400),
                    }}
                  ></div>
                  <a

                    onClick={() => navigate(`/post/${post.id}`)} 
                    className="text-blue-500 hover:underline"
                    style={{ cursor: 'pointer' }}
                  >
                    Read more
                  </a>
                </article>
              </section>
            ))}

            <BlogPagination
              count={totalPages}
              currentPage={currentPage} // Pass currentPage state
              onPageChange={handlePageChange}
            />
          </div>

          {/* Sidebar Section */}
          <aside className="flex-[1]">
            {isMobile ? (
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img src={event} alt="Wayforward" className={`w-full rounded-lg ${isMobile ? 'h-50' : 'h-auto'}`} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={event_tip} alt="Wayforward" className={`w-full rounded-lg ${isMobile ? 'h-50' : 'h-auto'}`} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={event_clock} alt="Wayforward" className={`w-full rounded-lg ${isMobile ? 'h-50' : 'h-auto'}`} />
                </SwiperSlide>
              </Swiper>
            ) : (
              <>
                <img src={event} alt="Wayforward" className="w-full rounded-lg mb-6" />
                <img src={event_tip} alt="Wayforward" className="w-full rounded-lg mb-6" />
                <img src={event_clock} alt="Wayforward" className="w-full rounded-lg mb-6" />
              </>
            )}
          </aside>
        </div>
      )}
    </section>
  );
};

export default BlogPostList;
