import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import Spinner from "./Spinner";

const Comment = () => {
  let api = useAxios();
 
  
  const [cookies] = useCookies(["access_token"]);
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

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
    if (!isAuthenticated) {
      toast.info("Kindly log in or sign up to leave a comment.");
      return;
    }


    if (!body) {
      toast.error("This field cannot be empty.");
      return;
    }

    

    setLoading(true);
    try {
      const response = await api.post(`${BASE_URL}/blog/comment/${post_id}/`, { body });
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

  // Helper function to generate a unique background color
  const generateColor = (input) => {
    const hash = input.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F5A623", "#8B572A"];
    return colors[hash % colors.length];
  };

  // Avatar Component
  const Avatar = ({ name }) => {
    const bgColor = generateColor(name);
    const initials = name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
    return (
      <div
        className="avatar flex items-center justify-center w-10 h-10 rounded-full text-white font-bold"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
    );
  };

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
              : "Signup or login to leave a comment."
          }
          disabled={!isAuthenticated}
        />
        <div className="flex justify-between items-center mt-2">
          <button
            type="submit"
            disabled={loading}
            className="p-1 bg-[#005fa3]  btn cursor-not-allowed text-white rounded-lg hover:bg-blue-600"
          >
            {loading ? <Spinner size={20} /> : "Post Comment"}
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
        <h5 className="text-pretty font-semibold">
          {post ? post.comment_count : 0} Comments
        </h5>
        {error && <p className="text-red-500">{error}</p>}
        {loading && <Spinner />}
        {!loading && post && post.comments.length > 0 ? (
          <>
            {post.comments
              .slice(0, showAllComments ? post.comments.length : 1)
              .map((comment) => (
                <div
                  key={comment.id}
                  className="comment mt-4 p-4 border border-gray-300 rounded-lg flex items-start space-x-4"
                >
                  <Avatar name={comment.user} />
                  <div>
                    <p>{comment.body}</p>
                    <p className="text-sm text-gray-500">
                      Posted by {comment.user} on{" "}
                      {new Date(comment.created_at).toLocaleDateString()}
                    </p>
                  </div>
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
