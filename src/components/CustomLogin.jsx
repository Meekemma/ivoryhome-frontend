import React, { useState } from 'react'; // Added useState
import logo from '../assets/images/logo.png';
import google from '../assets/images/google.svg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../styles/main.css';
import Footer from './Footer';


const CustomLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ redirectToSignup, setRedirectToSignup] = useState(false);

  return (

    <>

        <div className=" container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Fixed Logo Navbar */}
        <div className="top-0 left-0 w-full z-50">
            <div className="container mx-auto py-4">
            <div className="shadow-md rounded-lg inline-block p-2 bg-white">
                <img src={logo} alt="Ivory Homes Logo" className="h-16 w-auto object-contain" />
            </div>
            </div>
        </div>

        {/* Login Content */}
        <div className="pt-5 pb-10 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            {/* Inner Border */}
            <div className="p-5 border-2 border-[#0077c0] rounded-lg">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
                <p className="text-center text-gray-600 mb-6">Welcome back! Log in to continue.</p>

                {/* Social Login */}
                <div className="mb-6">
                <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50">
                    <img src={google} alt="Google" className="h-6 w-6 mr-2 object-contain" />
                    Continue with Google
                </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-6">
                <hr className="flex-grow border-gray-300" />
                <span className="text-gray-500">OR</span>
                <hr className="flex-grow border-gray-300" />
                </div>

                {/* Form */}
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
                <div>
                    <label htmlFor="password" className="block text-sm text-gray-700">
                    Password
                    </label>
                    <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center text-sm">
                    <p>Don’t have an account?</p>
                    <a href="/signup" className="text-purple-600 hover:underline">
                    Sign up
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full btn text-white py-2 rounded-md"
                >
                    Login
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>

        <Footer />

    </>
  );
};

export default CustomLogin;
