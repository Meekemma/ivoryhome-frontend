import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaCopy } from "react-icons/fa";
import { useParams, Link } from "react-router-dom"; // Link included
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/post.css";
import Comment from "./Comment";
import PopularPost from "./PopularPost";
import RelatedPost from "./RelatedPost";
import Spinner from "./Spinner";  // Import your Spinner component

const SinglePostPage = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/blog/post/${post_id}/`);
        setPost(response.data);
      } catch (err) {
        setError("Failed to load the post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [post_id]);

  if (error) return <p className="text-red-500">{error}</p>;

  // If loading is true, show the spinner
  if (loading) {
    return <Spinner loading={loading} size={40} color="#3498db" />;
  }

  if (!post) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const postUrl = `${window.location.origin}/post/${post.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(postUrl);
    setCopySuccess("URL copied to clipboard!");
    setTimeout(() => setCopySuccess(""), 2000); // Reset message after 2 seconds
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content Section */}
        <div className="flex-[2] bg-white py-8 px-2 rounded-lg shadow-lg">
          {/* Post Header */}
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap justify-between items-center mb-2 text-gray-600 text-sm">
            <p className="text-sm w-full sm:w-auto">
              By {post.author} | Category: {post.category.name}
            </p>

            <div className="flex items-center text-sm text-gray-600 w-full sm:w-auto mt-2 sm:mt-0">
              <FaCalendarAlt className="mr-1" />
              <span>Published: {formatDate(post.created_at)}</span>
            </div>
          </div>

          {/* Post Image */}
          <div className="mb-6">
            <img
              src={`${CLOUD_URL}${post.image}`}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          {/* Share Buttons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Share this post:</h3>
            <div className="flex gap-4 mt-2">
              <FacebookShareButton url={postUrl} quote={post.title}>
                <FacebookIcon size={30} round />
              </FacebookShareButton>
              <TwitterShareButton url={postUrl} title={post.title}>
                <TwitterIcon size={30} round />
              </TwitterShareButton>
              <LinkedinShareButton url={postUrl} title={post.title}>
                <LinkedinIcon size={30} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={postUrl} title={post.title}>
                <WhatsappIcon size={30} round />
              </WhatsappShareButton>
              <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-gray-200">
                <FaCopy size={20} />
              </button>
            </div>
            {copySuccess && <span className="text-green-500 mt-2">{copySuccess}</span>}
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  to={`/tags/${tag.slug}`}
                  key={tag.id}
                  className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Comments */}
          <Comment />
        </div>

        {/* Sidebar Section */}
        <aside className="flex-[1]">
          <PopularPost />
          <RelatedPost />
        </aside>
      </div>
    </div>
  );
};

export default SinglePostPage;
