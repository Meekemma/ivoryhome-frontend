import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import realtor from '../../assets/images/realtor.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from "../blog/Spinner";


const ContactAnime = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "http://localhost:8000";


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/booking/inquiries/`, formData);
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
          toast.error(error.response.data || "Submission failed. Please try again.");
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center">
        Contact Us
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="hidden lg:block w-full lg:w-1/2">
          <LazyLoadImage 
            src={realtor} 
            alt="Realtor" 
            className="w-full rounded-lg shadow-md"
            data-aos="fade-right" 
            effect="blur"
            wrapperProps={{
              style: { 
                transition: "opacity 1s ease-in-out",
              },
            }}
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                aria-label="Name"
              />
            </div>

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
                aria-label="Email"
              />
            </div>

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
                aria-label="Message"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-md btn transition ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1d1c1c] text-white"}`}
              disabled={isLoading}
              data-aos="fade-up"
            >
              {isLoading ? <Spinner loading={isLoading} size={20} color="#ffffff" /> : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAnime;
