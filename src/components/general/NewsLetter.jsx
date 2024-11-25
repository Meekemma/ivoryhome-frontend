import React from 'react';
import logo from '../../assets/images/logo.png'; // Adjust the path as needed

const NewsLetter = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-6 sm:space-y-0 sm:space-x-12">
        {/* Company Logo (Hidden on small screens) */}
        <div className="hidden sm:block ">
          <img src={logo} alt="Company Logo" className="w-40 h-auto rounded-lg bg-white p-2" />
        </div>


        {/* Newsletter Content */}
        <div className="text-center sm:text-left ">
          <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6">
            Get the latest updates, exclusive deals, and more delivered straight to your inbox.
          </p>

          <form
            className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 w-full sm:w-auto text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
