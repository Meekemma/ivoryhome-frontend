import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactInfo = () => {
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
        Get In Touch
      </h2>
      
      <div className="max-w-lg mx-auto">
        {/* Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div data-aos="fade-up" data-aos-delay="200">
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

            <div data-aos="fade-up" data-aos-delay="300">
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

            <div data-aos="fade-up" data-aos-delay="400">
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
              data-aos-delay="500"
            >
              {isSubmitted ? 'Thank You!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
