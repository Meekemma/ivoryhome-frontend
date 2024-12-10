import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    // Countdown Timer
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate("/Properties");
    }, 15000);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full">
        <FiCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
        Thank you for your payment. Your transaction has been processed successfully.
        </p>
        <p className="text-gray-700 mb-6">
        A confirmation email has been sent to you with the transaction details and next steps. Please check your email inbox (and your spam or junk folder if you don’t see it immediately) for further information.
        </p>
        <p className="text-gray-700 mb-6">
        If you have any questions or need assistance, feel free to contact our support team.
        </p>

        <p className="text-gray-600">
          Redirecting to properties page in{" "}
          <span className="font-bold text-green-700">{countdown}</span> seconds...
        </p>
        <button
          onClick={() => navigate("/Properties")}
          className="mt-6 py-3 px-6 btn bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
        >
          Go to Properties Now
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
