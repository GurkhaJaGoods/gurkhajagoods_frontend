// src/components/layout/Navbar/Navbar.tsx
import {
  ShoppingBag,
  Search,
  LayoutGrid,
  User,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categoryList = [
    { id: 1, name: "Electronics", icon: "/image/Arrow/Green.png" },
    { id: 2, name: "Clothing", icon: "/image/Arrow/Green.png" },
    { id: 3, name: "Home & Garden", icon: "/image/Arrow/Green.png" },
    { id: 4, name: "Sports", icon: "/image/Arrow/Green.png" },
  ];

  const isLoggedIn = false;
  const cartItemCount = 0;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="ShopEase" className="h-12 w-auto" />
          </Link>

          {/* Desktop Category Dropdown */}
          <div className="hidden md:flex items-center">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                <LayoutGrid className="h-5 w-5" />
                <span>Categories</span>
                <ChevronDown className="h-4 w-4" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <h3 className="px-2 py-2 text-sm font-semibold text-gray-700">
                        Browse Categories
                      </h3>
                    </Menu.Item>
                    <div className="border-t border-gray-200 my-1"></div>
                    {categoryList.map((category) => (
                      <Menu.Item key={category.id}>
                        {({ active }) => (
                          <Link
                            to={`/category/${category.name.toLowerCase()}`}
                            className={`${
                              active
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors`}>
                            <img
                              src={category.icon}
                              alt={category.name}
                              className="h-5 w-5 mr-3"
                            />
                            {category.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden  md:flex items-center rounded-full border px-4 py-2 flex-1 max-w-md mx-4 border-gray-400 transition-colors">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full border-none outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center hover:text-blue-600 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Transition
          show={mobileMenuOpen}
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full">
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg md:hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img src="/logo.png" alt="ShopEase" className="h-10" />
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4">
              {/* Mobile Search */}
              <div className="flex items-center rounded-full border px-4 py-2 mb-4">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="ml-2 w-full border-none outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              {/* Mobile Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {categoryList.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.name.toLowerCase()}`}
                      className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}>
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="h-5 w-5 mr-3"
                      />
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Links */}
              {isLoggedIn ? (
                <div className="space-y-2">
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}>
                    My Orders
                  </Link>
                  <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block w-full text-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </Transition>

        {/* Mobile Search (shown when sidebar is closed) */}
        {!mobileMenuOpen && (
          <div className="mt-3 md:hidden">
            <div className="flex items-center rounded-full border px-4 py-2 border-gray-400 transition-colors">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full border-none outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
