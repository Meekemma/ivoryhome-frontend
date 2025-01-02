import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/main.css";
import Footer from "./Footer";
import AuthContext from "../context/AuthContext";
import { useCookies } from "react-cookie";
import Spinner from "./blog/Spinner";

const CustomLogin = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, formData, handleChange, loginUser, loginWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = cookies.access_token;
    if (isAuthenticated) {
      navigate("/");
    }
  }, [cookies.access_token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const success = await loginUser(e);
    if (success) {
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath);
    } else {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Fixed Logo Navbar */}
        <div className="top-0 left-0 w-full z-50">
          <div className="container mx-auto py-4">
            <div className="shadow-md rounded-lg inline-block p-2 bg-white">
              <img
                src={logo}
                alt="Ivory Homes Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Login Content */}
        <div className="pt-5 pb-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
            {/* Inner Border */}
            <div className="p-3 rounded-lg">
              {/* Header */}
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Login
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Welcome back! Login to continue.
              </p>

              {/* Social Login */}
              <div className="mb-6">
                <button
                  className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50"
                  onClick={loginWithGoogle}
                >
                  <img
                    src={google}
                    alt="Google"
                    className="h-6 w-6 mr-2 object-contain"
                  />
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
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
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
                  <a onClick={()=>navigate("/signup")} style={{ cursor: 'pointer' }} className="text-purple-600 hover:underline">
                    Sign up
                  </a>
                </div>

                <div className="text-left text-sm">
                  <a
                    onClick={()=>navigate("/reset_password")} style={{ cursor: 'pointer' }} 
                    className="text-purple-600 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn py-2 rounded-md flex justify-center items-center"
                >
                  {isLoading ? (
                    <Spinner loading={isLoading} size={20} color="#ffffff" />
                  ) : (
                    "Login"
                  )}
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
