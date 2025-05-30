import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import Contact from "./pages/Contact";
import CookieConsent from "./components/general/CookieConsent";
import Booking from "./pages/Booking";
import CustomResetPasswordConfirm from "./components/CustomResetPasswordConfirm";
import SinglePost from "./pages/SinglePost";
import AllProperties from "./pages/AllProperties";
import SingleProperty from "./pages/SingleProperty";
import Order from "./pages/Order";
import Profile from "./pages/Auth/Profile";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/general/ScrollToTop";
import Payment from "./pages/Payment";
import SuccessPage from "./components/payment/SuccessPage";
import ConditionalPopups from "./pages/ConditionalPopups";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import Royal from "./pages/Royal";
import IndiobiPage from "./pages/IndiobiPage";
import OwerriPage from "./pages/OwerriPage";

function App() {
  
  

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <AuthProvider>
        
        <Routes>
          

          {/* Authentication URL*/}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset_password_confirm" element={<CustomResetPasswordConfirm/>} />
          <Route path="/change_password" element={<ProtectedRoute><ChangePasword /></ProtectedRoute>}/>
          <Route path="/profile/:user_id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />

          {/* General URL*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="estate/royal-dynasty-estate" element={<Royal />} />
          <Route path="estate/Indiobi-estate" element={<IndiobiPage />} />  
          <Route path="estate/Owerri-estate" element={<OwerriPage />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/booking" element={<Booking />} />
          <Route path="/Terms_&_conditions" element={<TermsAndConditionsPage/>} />
          <Route path="/Cookie_policy" element={<CookiePolicyPage/>} />
          <Route path="/Privacy_&_Policy" element={<PrivacyPolicyPage/>} />
          

          {/* Blog URL*/}
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:post_id" element={<SinglePost />} />

          {/* Properties and Payment URL*/}
          <Route path="/Properties" element={<AllProperties />} />
          <Route path="/Property/:id" element={<SingleProperty />} />
          <Route path="/request" element={ <ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="/checkout/summary" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment/></ProtectedRoute>} />
          <Route path="/success" element={<SuccessPage/>} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer />
        <ConditionalPopups />
        
        <CookieConsent />
      </AuthProvider>
    </Router>
  );
}

export default App;
