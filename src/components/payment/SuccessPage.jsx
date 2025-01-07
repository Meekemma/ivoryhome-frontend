import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import CheckAnimation from '../../assets/images/Animation - 1736235885893.json';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");
  const [countDown, setCountDown] = useState(15);

  useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => setCountDown(countDown - 1), 1500);
      return () => clearTimeout(timer);
    } else {
      navigate("/"); 
    }
  }, [countDown, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center items-center">
          <div className="relative w-full flex items-center justify-center">
            <Lottie animationData={CheckAnimation} loop={true} style={{ height: 250, width: 250 }} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your payment. Your transaction has been successfully processed.
          We will be reaching out to you via email shortly to discuss the next steps and follow up.
        </p>
        <div className="mb-6">
          <p className="text-gray-800">
            <strong>Transaction Reference:</strong> {trxref || "N/A"}
          </p>
          <p className="text-gray-800">
            <strong>Reference:</strong> {reference || "N/A"}
          </p>
        </div>
        <p className="text-gray-500">
          You will be redirected to the homepage in <span className="font-bold text-lg text-blue-600">{countDown}</span> seconds.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
