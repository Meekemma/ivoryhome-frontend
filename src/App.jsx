import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ChangePasword from "./pages/Auth/ChangePasword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Verification from "./pages/Auth/Verification";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Estate from "./pages/Estate";
import Contact from "./pages/Contact";
import CookieConsent from "./components/general/CookieConsent";
import Booking from "./pages/Booking";

import { useCookies } from "react-cookie";
import { setupAxiosInterceptors } from "./utils/axiosInstance";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/general/ScrollToTop";
import CustomResetPasswordConfirm from "./components/customResetPasswordConfirm";
import SinglePost from "./pages/SinglePost";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    setupAxiosInterceptors(cookies, setCookie, removeCookie);
  }, [cookies, setCookie, removeCookie]); // Added dependency array and fixed closing parentheses

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset_password_confirm" element={<CustomResetPasswordConfirm />} />
          <Route path="/change_password" element={<ProtectedRoute><ChangePasword /></ProtectedRoute>}/>
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:post_id" element={<SinglePost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
        <CookieConsent />
      </AuthProvider>
    </Router>
  );
}

export default App;
