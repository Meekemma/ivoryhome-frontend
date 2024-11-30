import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const Comment = () => {
  const [cookies] = useCookies(["access_token"]);
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const BASE_URL = "http://127.0.0.1:8000";

  const [formData, setFormData] = useState({
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { body } = formData;

    if (!body) {
      toast.error("This field cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post(`/blog/comment/${post_id}/`, { body });
      if (response.status === 200 || response.status === 201) {
        toast.success("Comment posted successfully!");
        setFormData({ body: "" });
        fetchComments();
      }
    } catch (error) {
      console.error("Error posting comment:", error.response || error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/blog/post/${post_id}/`);
      setPost(response.data);
    } catch (err) {
      console.error("Failed to load the post:", err);
      setError("Failed to load the post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post_id]);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const isAuthenticated = !!cookies.access_token;

  return (
    <div>
      <form onSubmit={handleSubmit} className="comment-form mt-6">
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          rows="2"
          className="w-full p-2 border rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={
            isAuthenticated
              ? "Write your comment..."
              : "Sign up or log in to leave a comment."
          }
          disabled={!isAuthenticated}
        />
        <div className="flex justify-between items-center mt-2">
          <button
            type="submit"
            disabled={!isAuthenticated || loading}
            className={`p-1 text-white rounded-lg ${
              !isAuthenticated ? "bg-red-500 hover:bg-red-600" : "bg-blue-500"
            }`}
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                Post Comment
                {!isAuthenticated && (
                  <span className="ml-2">
                    🚫 {/* Red warning icon */}
                  </span>
                )}
              </>
            )}
          </button>
          {!isAuthenticated && (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-blue-500 underline text-sm hover:text-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-blue-500 underline text-sm hover:text-blue-700"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </form>

      <div className="comments mt-8">
        <h5 className="text-xl font-semibold">
          {post ? post.comment_count : 0} Comments
        </h5>
        {error && <p className="text-red-500">{error}</p>}
        {loading && <p>Loading comments...</p>}
        {!loading && post && post.comments.length > 0 ? (
          <>
            {post.comments
              .slice(0, showAllComments ? post.comments.length : 1)
              .map((comment) => (
                <div
                  key={comment.id}
                  className="comment mt-4 p-4 border border-gray-300 rounded-lg"
                >
                  <p>{comment.body}</p>
                  <p className="text-sm text-gray-500">
                    Posted by {comment.user} on{" "}
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            {post.comments.length > 1 && (
              <button
                onClick={toggleComments}
                className="mt-4 p-2 bg-gray-200 text-blue-500 rounded"
              >
                {showAllComments ? "Close" : "See More"}
              </button>
            )}
          </>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
