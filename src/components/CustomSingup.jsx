import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import google from '../assets/images/google.svg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../styles/main.css';
import Footer from './Footer';

const CustomSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    return (
        <>
            <div className="container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
                {/* Fixed Logo Navbar */}
                <div className="top-0 left-0 w-full z-50">
                    <div className="container mx-auto py-4">
                        <div className="shadow-md rounded-lg inline-block p-2 bg-white">
                            <img src={logo} alt="Ivory Homes Logo" className="h-16 w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Signup Content */}
                <div className="pt-5 pb-10 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        {/* Inner Border */}
                        <div className="p-5 border-2 border-[#0077c0] rounded-lg">
                            {/* Header */}
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create an Account</h2>
                            <p className="text-center text-gray-600 mb-6">
                                Create a free account in less than 5 minutes.
                            </p>

                            {/* Social Signup */}
                            <div className="mb-6">
                                <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50">
                                    <img src={google} alt="Google" className="h-6 w-6 mr-2 object-contain" />
                                    Sign up with Google
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
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label htmlFor="firstName" className="block text-sm text-gray-700">
                                            First Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="lastName" className="block text-sm text-gray-700">
                                            Last Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            required
                                            className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-gray-700">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm text-gray-700">
                                        Password*
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
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm text-gray-700">
                                        Confirm Password*
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm your password"
                                            required
                                            className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                <div className="text-center text-sm">
                                    <p className="inline">Already have an account?</p>
                                    <a href="/login" className="text-purple-600 hover:underline ml-1">
                                        Login
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn text-white py-2 rounded-md"
                                >
                                    Create Account
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

export default CustomSignup;