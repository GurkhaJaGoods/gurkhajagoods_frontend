"use client";
import React, { useEffect, useState } from "react";

import { toast } from "sonner";
import Footer from "@/components/Footer";
import axiosInstance from "@/config/axiosInstance";

function OrderConfirmation() {
  const [products, setProducts] = useState<any>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState<any>({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    note: "",
  });

  // Load saved cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("CartItems") || "[]");
    setProducts(savedCart);
  }, []);

  // Helper function to update cart state and localStorage
  const updateCart = (newCart: any) => {
    setProducts(newCart);
    localStorage.setItem("CartItems", JSON.stringify(newCart));
  };

  // Quantity change handlers
  const increaseQuantity = (id: any) => {
    const updated = products.map((item: any) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQuantity = (id: any) => {
    const updated = products.map((item: any) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      const updated = products.map((item: any) =>
        item.id === id ? { ...item, quantity: value } : item
      );
      updateCart(updated);
    }
  };

  // Handle input changes for shipping form
  const handleAddressChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  // Calculate total price
  const totalPrice = products.reduce(
    (acc: number, item: { price: number; quantity: number }) =>
      acc + item.price * item.quantity,
    0
  );

  // Handle order submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        order_items: products.map((item: { id: any; quantity: any }) => ({
          product: item.id,
          quantity: item.quantity,
        })),
        customer_name: shippingAddress.name,
        email: shippingAddress.email, // Replace with real user info
        phone_number: shippingAddress.phone, // Replace with real user info
        shipping_address: shippingAddress.street,
        city: shippingAddress.city,
        state: shippingAddress.state,
        zip_code: shippingAddress.zip,
      };

      const response = await axiosInstance.post(
        "/api/order/create/",
        orderData
      );

      if (response.status === 201) {
        toast.success("Order Submitted Successfully!");
        localStorage.removeItem("CartItems");
      } else {
        toast.error("Failed to submit the order. Please try again.");
      }
    } catch (error) {
      console.error("Order submission error:", error);
      toast.error("An error occurred while submitting your order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="order-confirmation-container mt-4 md:mt-16 p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Order Confirmation</h2>

        {/* Product List */}
        {products?.length > 0 ? (
          products?.map((product: any) => (
            <div
              className="product-details mb-6 flex flex-col md:flex-row gap-6"
              key={product.id}>
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                height={100}
                width={100}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                {product?.category?.name === "Delivery" ? null : (
                  <div className="flex gap-3 items-center mt-2">
                    <span className="font-bold text-lg">
                      €{Number(product?.price)?.toFixed(2)}
                    </span>
                    <div className="flex gap-2 items-center">
                      <label htmlFor="quantity" className="text-lg">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        value={product.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(e, product.id)}
                        className="w-16 px-3 py-1 border rounded-md text-center"
                      />
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="px-2 border border-red-200  rounded hover:bg-red-300 transition">
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="px-2 border border-green-200 rounded hover:bg-green-200 transition">
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}

        {/* Shipping Form */}
        <h3 className="text-2xl font-semibold mb-4">Shipping Address</h3>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phone", "street", "city", "state", "zip"].map(
            (field) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700">
                  {field[0].toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={shippingAddress[field]}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
            )
          )}

          {/* Total Price */}
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-lg">Total Price</span>
            <span className="font-semibold text-lg">
              €{totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || products.length === 0}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
            {isSubmitting ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default OrderConfirmation;
