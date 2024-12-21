import React, { useState } from "react";
import useAxios from "../../utils/useAxios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { FiCreditCard } from "react-icons/fi";

const PaymentPage = () => {
  const api = useAxios();
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["order_id", "total_price"]);
  const order_id = cookies.order_id;
  const total_price = cookies.total_price;

  const createPayment = async () => {
    setLoading(true);
    try {
      const response = await api.post(
        `/payment/paystack/initiate-payment/${order_id}/`
      );

      if (response.data.status === "CREATED") {
        window.location.href = response.data.approval_url;
      } else {
        toast.error("Error creating payment");
      }
    } catch (err) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl text-center mb-4 text-blue-600">
          Payment Summary
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Total Amount:{" "}
          <span className="font-bold text-xl text-green-500">
            ₦{parseFloat(total_price).toLocaleString()}
          </span>
        </p>
        {loading ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-8 w-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              ></path>
            </svg>
          </div>
        ) : (
          <button
            onClick={createPayment}
            className="w-full flex items-center justify-center py-3 btn bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
          >
            <FiCreditCard className="w-5 h-5 mr-2" />
            Pay with Paystack
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
