import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/main.css";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";
import Spinner from "./blog/Spinner";

const CustomChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { old_password, new_password, confirm_password } = formData;

    if (!old_password || !new_password || !confirm_password) {
      toast.error("All fields are required");
      return false;
    }

    if (new_password !== confirm_password) {
      toast.error("Passwords do not match");
      return false;
    }

    setIsLoading(true);

    try {
      const res = await axiosInstance.put("base/change-password/", formData);
      if (res.status === 200) {
        toast.success("Password changed successfully");
        navigate('/login')
        setFormData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
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
      <div className="container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="p-5 border-2 border-[#0077c0] rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Change Password
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="oldPassword" className="block text-sm text-gray-700">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    id="oldPassword"
                    name="old_password"
                    value={formData.old_password}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter old password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm text-gray-700">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full btn text-white py-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ?( 
                    <Spinner loading={isLoading} size={20} color="#ffffff" />
                  ) :(
                     "Change Password"
                  )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomChangePassword;
