import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner"; 
import { useNavigate } from 'react-router-dom';

const PopularPost = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false); 
  const navigate = useNavigate();
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetchPopularPost();
  }, []);

  const fetchPopularPost = async () => {
    setLoading(true); 
    setError(null); 
    try {
      const res = await axios.get(`${BASE_URL}/blog/popular-posts/`);
      setPopularPosts(res.data);
    } catch (err) {
      setError("Failed to load the posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  
  const togglePostView = () => {
    setShowAllPosts(!showAllPosts);
  };

  return (
    <div className="rounded-lg border border-gray-300 shadow-lg bg-white p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Trending Posts</h2>

      {/* Display Spinner while loading */}
      {loading && (
        <div className="h-32 flex items-center justify-center">
          <Spinner loading={true} />
        </div>
      )}

      {/* Render content only when not loading */}
      {!loading && (
        <>
          {/* Render error message if there's an error */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Render posts if there are any */}
          {!error && popularPosts.length > 0 && (
            <div className="post-list">
              <ul className="list-disc pl-5 space-y-3">
                {popularPosts
                  .slice(0, showAllPosts ? popularPosts.length : 5)
                  .map((popularPost) => (
                    <li key={popularPost.id}>
                      <Link
                        to={`/post/${popularPost.id}`}
                        className="font-bold text-blue-600 hover:underline"
                      >
                        {popularPost.title}
                      </Link>
                      <span className="ml-2 text-sm text-gray-600">
                        ({popularPost.comment_count} Comments)
                      </span>
                    </li>
                  ))}
              </ul>
              {popularPosts.length > 5 && (
                <button
                  onClick={togglePostView}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {showAllPosts ? "See Less" : "See More"}
                </button>
              )}
            </div>
          )}

          {/* Render fallback message if no posts */}
          {!error && popularPosts.length === 0 && (
            <p>No popular posts found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default PopularPost;
