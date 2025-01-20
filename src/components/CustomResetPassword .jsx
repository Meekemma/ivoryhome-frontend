import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Footer from "./Footer";
import "../styles/main.css";
import Spinner from "./blog/Spinner";

const CustomResetPassword = () => {
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
        `${BASE_URL}/base/password_reset/request/`,
        formData
      );
      if (res.status === 200) {
        toast.info("Check your inbox to continue");
        setFormData({ email: "" });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (typeof errors === "object") {
          for (const key in errors) {
            if (Array.isArray(errors[key])) {
              toast.error(errors[key][0]);
              break;
            }
          }
        } else {
          toast.error(errors || "Failed. Please try again.");
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container px-4 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <div className="p-3 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Reset Password
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Enter your email address to receive password reset instructions.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full btn text-white py-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                 <Spinner loading={isLoading} size={20} color="#ffffff" />
                ) : ("Send Reset Link")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomResetPassword;
