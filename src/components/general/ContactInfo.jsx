import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../blog/Spinner";

const ContactInfo = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validation: All fields must be filled
    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/booking/inquiries/",
        formData
      );

      if (res.status === 201) {
        toast.success("Contact form has been submitted");
        setFormData({ name: "", email: "", message: "" }); 
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
          toast.error(
            error.response.data || "Submission failed. Please try again."
          );
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
      setFormData({ name: "", email: "", message: "" }); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="container mx-auto py-12 px-6 bg-[#FFF5EE]"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center">
        Get In Touch
      </h2>

      <div className="max-w-lg mx-auto">
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div data-aos="fade-up">
              <label htmlFor="name" className="block text-sm text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email Field */}
            <div data-aos="fade-up">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Message Field */}
            <div data-aos="fade-up">
              <label htmlFor="message" className="block text-sm text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full bg-[#1d1c1c] text-white py-3 rounded-md btn transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              
              disabled={isLoading}
            >
              {isLoading ? ( 
                    <Spinner loading={isLoading} size={20} color="#ffffff" />
                  ) :(
                     "Send Message"
                  )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
