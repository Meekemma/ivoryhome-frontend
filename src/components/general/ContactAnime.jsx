import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import realtor from '../../assets/images/realtor.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle form submission (e.g., send the form data to your backend or API)
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center">
        Contact Us
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="hidden lg:block w-full lg:w-1/2" data-aos-delay="200">
          <LazyLoadImage 
            src={realtor} 
            alt="Realtor" 
            className="w-full rounded-lg shadow-md"
            data-aos="fade-right" 
            effect="blur"
            wrapperProps={{
              style: { 
                transition: "opacity 1s ease-in-out", // Smoother transitions
                backgroundColor: "rgba(0,0,0,0.1)", // Optional background
              },
            }}
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div data-aos="fade-up" data-aos-delay="300">
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

            <div data-aos="fade-up" data-aos-delay="400">
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

            <div data-aos="fade-up" data-aos-delay="500">
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

            <button
              type="submit"
              className="w-full bg-[#1d1c1c] text-white py-3 rounded-md btn transition"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {isSubmitted ? 'Thank You!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAnime;
