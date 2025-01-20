import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../blog/Spinner";

const NewsLetter = () => {
  const BASE_URL = window.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!email) {
      toast.error("Email field is required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/blog/subscribe/`,
        formData
      );
      if (res.status === 201) {
        toast.success("Subscription was Successful");
        setFormData({ email: "" }); 
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const message = error.response.data.message || error.response.data.error;
        toast.error(message || "Subscription failed. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-6 sm:space-y-0 sm:space-x-12">
        {/* Removed Company Logo */}

        {/* Newsletter Content */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 text-left">
            Get the latest updates, exclusive deals, and more delivered straight
            to your inbox.
          </p>

          <form
            className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-1 w-full"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="px-4 py-2 w-full sm:w-96 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
              required
            />

            <button
              type="submit"
              className={`bg-blue-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? <Spinner size={20} /> : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
