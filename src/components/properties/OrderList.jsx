import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAxios from '../../utils/useAxios';
import { toast } from "react-toastify";
import Spinner from "./ProSpinner";

const OrderList = () => {
  let api = useAxios();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updatingItemId, setUpdatingItemId] = useState(null);
  const navigate = useNavigate();
  const CLOUD_URL = import.meta.env.VITE_CLOUD_URL;

  const handleClick = () => {
    navigate("/checkout/summary");
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("commerce/orders/list/");
        setOrders(response.data);
      } catch (err) {
        toast.error("Failed to load the shortlisted properties. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderItem = async (id, quantity) => {
    if (quantity < 0) return;

    setUpdatingItemId(id);
    try {
      await api.put(`commerce/orderitem_update/${id}/`, { quantity });
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          order_items: order.order_items.map((item) =>
            item.id === id ? { ...item, quantity, item_total: item.property_price * quantity } : item
          ),
        }))
      );
    } catch (error) {
      toast.error("Failed to update order item");
    } finally {
      setUpdatingItemId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner loading={true} size={30} />
      </div>
    );
  }

  if (!orders.length) {
    return <div className="text-center text-gray-500">No shortlisted properties available.</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-left mb-6 text-[#005fa3]">
        {orders.reduce((total, order) => total + order.cart_items, 0) === 1
          ? `Shortlisted Property (${orders.reduce((total, order) => total + order.cart_items, 0)})`
          : `Shortlisted Properties (${orders.reduce((total, order) => total + order.cart_items, 0)})`}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-9">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              {order.order_items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start md:items-center border-b pb-4 mb-4 last:border-b-0 last:pb-0"
                >
                  <img
                      src={`${CLOUD_URL}${item.property_images?.image}`}
                      alt={item.property_title}
                      className="w-full md:w-20 h-20 object-cover rounded-md mb-4 md:mb-0"
                      loading='lazy'
                  />
                  <div className="flex-grow md:pl-4">
                    <Link
                      to={`/property/${item.property_listing}`}
                      className="text-pretty font-semibold hover:underline"
                    >
                      {item.property_title}
                    </Link>
                    <p className="text-sm text-gray-600">₦{item.property_price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <button
                      onClick={() => updateOrderItem(item.id, item.quantity - 1)}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      disabled={updatingItemId === item.id}
                    >
                      −
                    </button>
                    <span className="font-semibold">
                      {updatingItemId === item.id ? (
                        <Spinner loading={true} size={20} />
                      ) : (
                        item.quantity
                      )}
                    </span>
                    <button
                      onClick={() => updateOrderItem(item.id, item.quantity + 1)}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      disabled={updatingItemId === item.id}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm text-gray-600">₦{item.item_total.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-pretty font-semibold mb-4">Shortlist Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>
                ₦
                {orders
                  .reduce(
                    (acc, order) =>
                      acc +
                      order.order_items.reduce((subTotal, item) => subTotal + item.item_total, 0),
                    0
                  )
                  .toLocaleString()}
              </span>
            </div>
            <button
              className="w-full btn bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
              onClick={handleClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
