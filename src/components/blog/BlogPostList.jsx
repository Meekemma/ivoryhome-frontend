import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/post.css';
import BlogPagination from './BlogPagination';
import axios from 'axios';
import truncate from 'html-truncate';
import { FaCalendarAlt, FaCommentAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from './Spinner';

const BlogPostList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL = 'http://127.0.0.1:8000';
  const postsPerPage = 2;

  const location = useLocation();
  const navigate = useNavigate();

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
        `${BASE_URL}/blog/posts/?limit=${postsPerPage}&offset=${offset}`
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
  }, [currentPage]);

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
    <div className="container px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Spinner loading={loading} size={40} color="#3498db" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[2] border-2 bg-[#b0b0b0] p-8 rounded-lg shadow">
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
                      src={`${BASE_URL}${post.image}`}
                      alt={post.title}
                      className="absolute w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="text-black-700"
                    dangerouslySetInnerHTML={{
                      __html: truncate(post.content, 300),
                    }}
                  ></div>
                  <a
                    href={`/post/${post.id}`}
                    className="text-blue-500 hover:underline"
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

          <aside className="flex-[1]">
            <div className="rounded-lg bg-gray-600 p-6 mb-6" data-aos="fade-left">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="mb-6">
                <li className="text-gray-700">Web Development</li>
                <li className="text-gray-700">Design</li>
                <li className="text-gray-700">SEO</li>
              </ul>
            </div>
            <div className="rounded-lg py-6 bg-gray-600 p-6" data-aos="fade-left">
              <h2 className="text-xl font-bold mb-4">Latest Comments</h2>
              <ul>
                <li className="text-gray-700">"Great post!" - John</li>
                <li className="text-gray-700">"Very informative." - Jane</li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
