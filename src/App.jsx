import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ChangePasword from './pages/Auth/ChangePasword';
import ResetPassword from './pages/Auth/ResetPassword';
import Verification from './pages/Auth/Verification';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Estate from './pages/Estate';
import Contact from './pages/Contact';
import CookieConsent from './components/general/CookieConsent';
import Booking from './pages/Booking';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change_password" element={<ChangePasword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />


        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} /> 


        
      </Routes>
      <ToastContainer />
      <CookieConsent />
    </Router>
  );
}

export default App;
