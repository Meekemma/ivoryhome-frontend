import React, { useState } from "react";
import { toast } from "react-toastify";
import bookingImage from "../../assets/images/booking.png"; 
import Spinner from "../blog/Spinner";
import axios from "axios";

const BookingForm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    property_name: "",
    fullname: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
  });

  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { property_name, fullname, email, mobile, date, time } = formData;
    const now = new Date();
    const selectionDateTime = new Date(`${date}T${time}`);

    if (!property_name || !fullname || !email || !mobile || !date || !time) {
      toast.error("All fields are required!");
      return;
    }

    if (selectionDateTime < now) {
      toast.error("You cannot pick a past date or time!");
      return;
    }

    setIsLoading(true); 
    try {
      const res = await axios.post(`${BASE_URL}/booking/inspection/`, formData);
      if (res === 200 || res === 201) {
          toast.success("Booking submitted successfully!");
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
  
    
    setTimeout(() => {
      toast.success("Booking submitted successfully!");
      setIsLoading(false); 

      // Reset form data
      setFormData({
        property_name: "",
        fullname: "",
        email: "",
        mobile: "",
        date: "",
        time: "",
      });
    }, 2000); 
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 p-6 bg-gray-100">
      {/* Image and Text Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <img
          src={bookingImage}
          alt="Booking"
          className="w-full h-auto rounded-lg shadow-md"
          laoding="lazy"
        />
        <div className="mt-6 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-2">
            Book your dream property inspection in just a few clicks. Fill out
            the form, pick a date and time that suits you, and we'll confirm
            your booking. Enjoy hassle-free inspections tailored to your
            schedule!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Book a Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Property Name:
            </label>
            <input
              type="text"
              name="property_name"
              value={formData.property_name}
              onChange={handleChange}
              placeholder="Enter property name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? (
              <Spinner loading={isLoading} size={20} color="#ffffff" />
            ) : (
              "Submit Booking"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
