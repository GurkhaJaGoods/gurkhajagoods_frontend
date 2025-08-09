import { useState, useEffect } from "react";
import { Trash2, Minus, Plus, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProps = {
  isModal?: boolean;
  onClose?: () => void;
};

export default function Cart({ isModal = false, onClose }: CartProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(
      (typeof localStorage !== "undefined" &&
        localStorage.getItem("CartItems")) ||
        "[]"
    );
    setCart(savedCart);
  }, []);

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("CartItems", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("CartItems", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("CartItems", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`${
        isModal ? "fixed inset-0 z-50 overflow-y-auto" : "min-h-screen"
      } bg-gray-50/50`}>
      {/* Modal container with responsive sizing */}
      <div
        className={`${
          isModal
            ? "flex items-start justify-center min-h-screen p-4 sm:p-6 lg:p-8"
            : ""
        }`}>
        <div
          className={`
          bg-white rounded-xl shadow-xl overflow-hidden
          ${
            isModal
              ? "w-full max-w-2xl my-8 max-h-[90vh] flex flex-col"
              : "min-h-screen w-full"
          }
          `}>
          {/* Header with responsive padding */}
          <div className="bg-gradient-to-r from-primary to-primary-dark p-4 sm:p-5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-lg sm:text-xl font-bold">
                  Your Shopping Cart
                </h2>
              </div>
              {isModal && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close cart">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              {cart.length} {cart.length === 1 ? "item" : "items"} in cart
            </p>
          </div>

          {/* Scrollable content area */}
          <div
            className={`flex-1 overflow-y-auto ${
              isModal ? "max-h-[calc(90vh-180px)]" : ""
            }`}>
            <div className="p-4 sm:p-5">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingCart className="w-14 h-14 sm:w-16 sm:h-16 text-gray-300 mb-4" />
                  <h3 className="text-base sm:text-lg font-medium text-gray-700">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm sm:text-base">
                    Start adding some products to your cart
                  </p>
                  {isModal && (
                    <button
                      onClick={onClose}
                      className="mt-6 px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm sm:text-base">
                      Continue Shopping
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover border border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div className="truncate">
                            <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">
                              {item.name}
                            </h3>
                            <p className="text-primary font-semibold mt-1 text-sm sm:text-base">
                              €{Number(item.price)?.toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                            aria-label="Remove item">
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border rounded-lg overflow-hidden">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                              disabled={item.quantity === 1}>
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <span className="px-2 sm:px-3 text-center min-w-[1.5rem] sm:min-w-[2rem] text-sm sm:text-base">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                          <p className="font-medium text-sm sm:text-base">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer with sticky positioning in modal */}
          {cart.length > 0 && (
            <div
              className={`border-t border-gray-200 p-4 sm:p-5 bg-gray-50 ${
                isModal ? "sticky bottom-0" : ""
              }`}>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Subtotal
                  </span>
                  <span className="font-bold text-sm sm:text-base">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Shipping
                  </span>
                  <span className="font-bold text-sm sm:text-base">Free</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-primary-dark text-lg font-bold">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to={"/order-confirmation"}
                className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-2.5 sm:py-3 px-4 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg mt-4 text-sm sm:text-base">
                Proceed to Checkout
              </Link>
              {isModal && (
                <button
                  onClick={onClose}
                  className="mt-3 w-full text-center text-primary hover:text-primary-dark font-medium py-2 transition-colors text-sm sm:text-base">
                  Continue Shopping
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
