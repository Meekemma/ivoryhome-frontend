import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Eager load critical components
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/general/ScrollToTop";
import CookieConsent from "./components/general/CookieConsent";

// Lazy load other pages
const Login = lazy(() => import("./pages/Auth/Login"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const ChangePasword = lazy(() => import("./pages/Auth/ChangePasword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Verification = lazy(() => import("./pages/Auth/Verification"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const CustomResetPasswordConfirm = lazy(() => import("./components/CustomResetPasswordConfirm"));
const SinglePost = lazy(() => import("./pages/SinglePost"));
const AllProperties = lazy(() => import("./pages/AllProperties"));
const SingleProperty = lazy(() => import("./pages/SingleProperty"));
const Order = lazy(() => import("./pages/Order"));
const Profile = lazy(() => import("./pages/Auth/Profile"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Payment = lazy(() => import("./pages/Payment"));
const SuccessPage = lazy(() => import("./components/payment/SuccessPage"));
const ConditionalPopups = lazy(() => import("./pages/ConditionalPopups"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermsAndConditionsPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const Royal = lazy(() => import("./pages/Royal"));
const IndiobiPage = lazy(() => import("./pages/IndiobiPage"));
const OwerriPage = lazy(() => import("./pages/OwerriPage"));
const Gallery = lazy(() => import("./pages/Gallery"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '1.2rem',
    color: '#333'
  }}>
    Loading...
  </div>
);

function App() {
  
  // Wake up the backend on initial load (Render free tier goes to sleep)
  useEffect(() => {
    const wakeUpBackend = async () => {
      const backendUrl = import.meta.env.VITE_BASE_URL;
      if (backendUrl) {
        try {
          // Make a lightweight request to wake up the backend
          await fetch(`${backendUrl}/admin/`, { 
            method: 'GET',
            mode: 'no-cors' // Avoid CORS issues on health check
          });
          console.log('Backend wake-up request sent');
        } catch (error) {
          console.log('Backend wake-up attempt:', error.message);
        }
      }
    };
    
    wakeUpBackend();
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <AuthProvider>
        <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/gallery" element={<Gallery />} />
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
        </Suspense>

        <ToastContainer />
        <Suspense fallback={null}>
          <ConditionalPopups />
        </Suspense>
        
        <CookieConsent />
      </AuthProvider>
    </Router>
  );
}

export default App;
