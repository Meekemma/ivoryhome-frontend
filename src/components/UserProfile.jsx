import React, { useState, useEffect } from "react";
import  useAxios  from '../utils/useAxios';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import countries from "world-countries";
import Spinner from "./blog/Spinner";
import { FaUserCircle } from "react-icons/fa";
import '../styles/main.css';

const UserProfile = () => {
  let api = useAxios();
  const { user_id } = useParams();

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    country: "",
    state: "",
    phone_number: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Convert country data to react-select options
  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
  }));

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData({ ...formData, country: selectedOption ? selectedOption.label : "" });
  };

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await api.get(`${BASE_URL}/base/profile/${user_id}/`);
      setFormData({
        first_name: res.data.first_name || "",
        last_name: res.data.last_name || "",
        email: res.data.email || "",
        gender: res.data.gender || "",
        country: res.data.country || "",
        state: res.data.state || "",
        phone_number: res.data.phone_number || "",
      });
      const country = countryOptions.find(
        (option) => option.label === res.data.country
      );
      setSelectedCountry(country || null);
    } catch (err) {
      console.error("Error fetching profile:", err);
      toast.error("Failed to load profile. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user_id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { gender, country, phone_number, state } = formData;

    if (!gender || !country || !state || !phone_number) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await api.put(`${BASE_URL}/base/profile/${user_id}/`, formData);
      if (res.status === 200) {
        setFormData(res.data);
        toast.success("Profile updated successfully!");
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
    <div className="container max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-2xl bg-white">
      <div className="flex items-center justify-center mb-6">
        <FaUserCircle className="mr-2 text-blue-500 text-3xl" /> {/* Icon */}
        <h2 className="text-2xl font-semibold text-center">User Profile</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* First Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Gender Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Country Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Choose a country..."
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            required
          />
        </div>

        {/* State Field */}
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full py-2 btn bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner loading={isLoading} size={20} color="#ffffff" />
          ) : (
            "Update Profile"
          )}
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
