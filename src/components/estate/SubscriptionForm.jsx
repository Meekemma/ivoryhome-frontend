import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../blog/Spinner";
import { FaTimes } from "react-icons/fa";

const SubscriptionForm = ({ showPopup, closePopup }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const PLOT_COST = 1200000;

  const [formData, setFormData] = useState({
    estate: "Royal Dynasty Estate",
    surname: "",
    first_name: "",
    middle_name: "",
    email: "",
    phone_number: "",
    number_of_plots: "",
    cost_of_plots: 0,
    next_of_kin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number_of_plots") {
      const number = parseInt(value);
      if (isNaN(number) || number < 0) return;
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const numberOfPlots = parseInt(formData.number_of_plots) || 0;
    setFormData((prevData) => ({
      ...prevData,
      cost_of_plots: numberOfPlots * PLOT_COST,
    }));
  }, [formData.number_of_plots]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      surname,
      first_name,
      middle_name,
      email,
      phone_number,
      number_of_plots,
      cost_of_plots,
      next_of_kin,
    } = formData;

    if (
      !surname ||
      !first_name ||
      !middle_name ||
      !email ||
      !phone_number ||
      !number_of_plots ||
      !cost_of_plots ||
      !next_of_kin
    ) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/base/subscription/`, formData);
      if (res.status === 201) {
        toast.success("Subscription successful");
        setFormData({
          estate: "Royal Dynasty Estate",
          surname: "",
          first_name: "",
          middle_name: "",
          email: "",
          phone_number: "",
          number_of_plots: "",
          cost_of_plots: 0,
          next_of_kin: "",
        });
        closePopup();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        if (typeof errors === "object") {
          for (const key in errors) {
            if (Array.isArray(errors[key])) {
              toast.error(errors[key][0]);
              break;
            }
          }
        } else {
          toast.error(errors || "Failed. Please try again.");
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={closePopup}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Subscription Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Estate",
                name: "estate",
                type: "text",
                readOnly: true,
              },
              { label: "Surname", name: "surname", type: "text" },
              { label: "First Name", name: "first_name", type: "text" },
              { label: "Middle Name", name: "middle_name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phone_number", type: "tel" },
              {
                label: "Number of Plots",
                name: "number_of_plots",
                type: "number",
              },
              {
                label: "Cost of Plots",
                name: "cost_of_plots",
                type: "text",
                readOnly: true,
              },
              { label: "Next of Kin", name: "next_of_kin", type: "text" },
            ].map((field) => (
              <div key={field.name} className="form-group">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={field.name === "cost_of_plots" ? `#${formData.cost_of_plots.toLocaleString()}` : formData[field.name]}
                  onChange={handleChange}
                  readOnly={field.readOnly || false}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-black"
              } text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200`}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner loading={isLoading} size={20} color="#ffffff" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
