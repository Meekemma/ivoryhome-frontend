import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Footer from "./Footer";
import "../styles/main.css";
import Spinner from "./blog/Spinner";

const CustomResetPasswordConfirm = () => {
  const BASE_URL = window.env.VITE_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  // Extract the token from the URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm_password } = formData;

    if (!password || !confirm_password) {
      toast.error("Both fields are required");
      return;
    }

    if (password !== confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/base/password_reset/confirm/`,
        { password, token }
      );

      if (res.status === 200) {
        toast.success("Password reset successfully! You can now log in.");
        navigate("/login")
        setFormData({ password: "", confirm_password: "" });
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
              Enter your new password below.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Confirm new password"
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
                ): ("Reset Password")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomResetPasswordConfirm;
