import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaShieldAlt, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { FiCheck,FiTag, FiCheckCircle, FiClock  } from "react-icons/fi"; 
import useAxios from "../../utils/useAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Spinner from "./ProSpinner";
import { useCookies } from "react-cookie";
import ProfilePopup from "./ProfilePopup";

const PropertyCheckout = () => {
  let api = useAxios();
  const [cookies, setCookie] = useCookies(["user_id", "profile_complete"])
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [orders, setOrders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const user_id = cookies.user_id
  const profile_complete = cookies.profile_complete;

  
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;

  


  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await api.get(`${BASE_URL}/base/profile/${user_id}/`);
      setUserInfo(res.data);
    } catch (err) {
      toast.error("Failed to load profile. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user_id) {
      fetchProfile();
    }
  }, [user_id]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user_id) return; 
      setIsLoading(true);
      try {
        const response = await api.get(`${BASE_URL}/commerce/orders/list/`);
        setOrders(response.data);
        response.data.forEach((order) => {
          setCookie('order_id', order.id, { path: '/', maxAge: 3600 });
          setCookie('total_price', order.total_price, { path: '/', maxAge: 3600 });
        });

      } catch (err) {
        toast.error("Failed to load the shortlisted properties. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchOrders();
  }, [user_id]); // Run only when `user_id` is available


  const handleConfirmClick = async (e) => {
  
    if (profile_complete === "false") {
      setShowPopup(true);
    } else {
      navigate("/payment");
    }
  };
  
  

  const closePopup = () => setShowPopup(false);
  

  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-40">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between px-6 lg:px-10 py-4 border-b border-gray-200 bg-white">
          {/* Logo Section */}
          <div
            className="shadow-md rounded-lg p-2 bg-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Ivory Homes Logo"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Need Help Section */}
          <div className="text-xs lg:text-sm text-gray-600">
            <div className="flex items-center space-x-2 mb-1">
              <FaPhoneAlt className="text-gray-500 text-lg lg:text-xl" />
              <div className="flex-col">
                <p className="font-semibold">Need Help?</p>
                <p className="text-gray-600">Contact us</p>
              </div>
            </div>
          </div>

          {/* Secure Payments Section */}
          <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
            <FaShieldAlt className="text-gray-500 text-lg lg:text-xl" />
            <div className="flex-col">
              <p className="font-semibold">Secure</p>
              <p className="text-gray-600">Payments</p>
            </div>
          </div>
        </div>

        

        {/* Main Content Section */}
        <div className="container mx-auto mt-10 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Client Info & Property Shortlisted */}
          <div className="col-span-2 space-y-6">
            {/* Client Information Card */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-pretty font-semibold flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Client Information
                </h2>
              </div>
              <hr className="border-gray-200 mb-4" />
              <div className="text-gray-600">
                {isLoading ? (
                  <Spinner />
                ) : (
                  userInfo && (
                    <>
                      <p>{userInfo.first_name} {" "} {userInfo.last_name}</p>
                      <p>{userInfo.email}</p>
                      <p>{userInfo.phone_number}</p>
                      <p>{userInfo.gender}</p>
                      <p>{userInfo.country}</p>
                      <p>{userInfo.state}</p>
                    </>
                  )
                )}
              </div>
            </div>

            {/* Property Shortlisted Card */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-pretty font-semibold flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Property Shortlisted
                </h2>
              </div>
              <hr className="border-gray-200 mb-4" />
              <div className="text-gray-600">
                {isLoading ? (
                  <Spinner />
                ) : (
                  orders.length > 0 ? (
                    orders.map((order) => (
                      <div key={order.id}>
                        <p className="flex items-center space-x-2">
                          <FiTag className="w-4 h-4 text-blue-500" />
                          <span>Status: {order.status}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <FiCheckCircle className="w-4 h-4 text-green-500" />
                          <span>Total Price: ₦{order.total_price.toLocaleString()}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <FiClock className="w-4 h-4 text-gray-500" />
                          <span>Ordered Date: {new Date(order.ordered_date).toLocaleString()}</span>
                        </p>
                        {/* <h4 className="mt-4 font-semibold">Order Items:</h4> */}
                        {order.order_items.map((item) => (
                          <div key={item.id} className="pl-4 mt-2 border-l-2 border-gray-300 flex items-start">
                          {/* Image Section */}
                          <div className="flex-shrink-0 mr-4">
                            <img
                              src={`${CLOUD_URL}${item.property_images?.image}`}
                              alt={item.property_title}
                              className="w-20 h-20 object-cover rounded-md"
                              loading="lazy"
                            />
                          </div>
                        
                          {/* Content Section */}
                          <div className="flex-grow">
                            <p className="font-semibold text-gray-800">Property Title: {item.property_title}</p>
                            <p className="text-gray-600">Price: ₦{parseFloat(item.property_price).toLocaleString()}</p>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-gray-600">Total: ₦{item.item_total.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        ))}
                      </div>
                    ))
                  ) : (
                    <p>No properties shortlisted yet.</p>
                  )
                )}
              </div>
            </div>
            <a
              href="/Properties"
              className="flex text-sm underline text-blue-800 pt-1 hover:text-blue-600 transition duration-300"
            >
              <FaArrowLeft className="pt-1" />
              Go back & continue shortlisting property
            </a>

          
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white shadow-md px-6 lg:px-20 rounded-lg self-start">
            <h2 className="text-pretty font-semibold my-4">Order Summary</h2>
            <hr className="border-gray-200 mb-4" />
            <div className="flex items-center mb-2">
              <p className="text-gray-600">Total</p>
              <p className="font-semibold">₦{orders.reduce((acc, curr) => acc + curr.total_price, 0).toLocaleString()}</p>
            </div>
            <button
              className={`w-full py-3 mt-4 rounded-lg flex items-center justify-center space-x-2 ${
                profile_complete
                  ? ' btn bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-400 text-gray-700'
              }`}
              onClick={handleConfirmClick} // Always trigger this function
            >
              <FiCheck />
              <span>Confirm</span>
            </button>

            <p className="text-xs text-gray-500 py-4 text-center">
              By proceeding, you are automatically accepting the{" "}
              <a onClick={()=> navigate('/Terms_&_conditions')} style={{ cursor: 'pointer' }} className="text-sm text-blue-950 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
      {showPopup && <ProfilePopup showPopup={showPopup} closePopup={closePopup} />}
    </>
  );
};

export default PropertyCheckout;
