import React from 'react';
import '../styles/main.css';
import Footer from './Footer';


const CustomResetPassword = () => {
  return (
    <>
    
    
    <div className="container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="p-5 border-2 border-[#0077c0] rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Reset Password</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email address to receive password reset instructions.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full btn text-white py-2 rounded-md"
            >
              Send Reset Link
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
