import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner"; // Assuming Spinner is in the same directory

const RelatedPost = () => {
  const { post_id } = useParams();
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false); // State to toggle view
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetchRelatedPosts();
  }, [post_id]);

  const fetchRelatedPosts = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    try {
      const response = await axios.get(`${BASE_URL}/blog/post/${post_id}/`);
      setRelatedPosts(response.data.related_posts || []);
    } catch (err) {
      setError("Failed to load related posts. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const togglePostView = () => {
    setShowAllPosts(!showAllPosts);
  };

  return (
    <div className="rounded-lg border border-gray-300 shadow-lg bg-white p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Related Posts</h2>

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
          {!error && relatedPosts.length > 0 && (
            <div className="post-list">
              <ul className="list-disc pl-5 space-y-3">
                {relatedPosts
                  .slice(0, showAllPosts ? relatedPosts.length : 5)
                  .map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/post/${post.id}`}
                        className="font-bold text-blue-600 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              {relatedPosts.length > 5 && (
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
          {!error && relatedPosts.length === 0 && (
            <p>No related posts found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default RelatedPost;
