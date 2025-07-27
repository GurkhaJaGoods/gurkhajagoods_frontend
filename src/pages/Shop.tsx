import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "@/config/axiosInstance";
import {
  FiSearch,
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { ProductCard } from "@/components/ProductCard";

// Mock data for products
const products = [
  {
    id: "1",
    title: "Organic Apples",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb",
    originalPrice: 2.99,
    salePrice: 1.99,
    onSale: true,
    category: "fruits",
  },
  {
    id: "2",
    title: "Fresh Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    originalPrice: 3.49,
    salePrice: 3.49,
    onSale: false,
    category: "dairy",
  },
  {
    id: "3",
    title: "Whole Wheat Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    originalPrice: 2.49,
    salePrice: 1.99,
    onSale: true,
    category: "bakery",
  },
  {
    id: "4",
    title: "Free Range Eggs",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
    originalPrice: 4.99,
    salePrice: 4.99,
    onSale: false,
    category: "dairy",
  },
  {
    id: "5",
    title: "Organic Bananas",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    originalPrice: 1.99,
    salePrice: 1.49,
    onSale: true,
    category: "fruits",
  },
  {
    id: "6",
    title: "Tomatoes",
    image: "https://images.unsplash.com/photo-1592841200221-a6890a8dfc3f",
    originalPrice: 2.29,
    salePrice: 2.29,
    onSale: false,
    category: "vegetables",
  },
  {
    id: "7",
    title: "Greek Yogurt",
    image: "https://images.unsplash.com/photo-1577047304216-5e0f8a0da6e8",
    originalPrice: 3.99,
    salePrice: 3.49,
    onSale: true,
    category: "dairy",
  },
  {
    id: "8",
    title: "Spinach",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    originalPrice: 1.99,
    salePrice: 1.99,
    onSale: false,
    category: "vegetables",
  },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
  { id: "dairy", name: "Dairy" },
  { id: "bakery", name: "Bakery" },
];

export function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let results = products;

    // Apply search filter
    if (searchTerm) {
      results = results.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      results = results.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");

    useEffect(() => {
      setIsLoading(true);
      let results = products;

      if (searchTerm) {
        results = results.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory !== "all") {
        results = results.filter(
          (product) => product.category === selectedCategory
        );
      }

      // Add a small delay to show loading state (optional)
      const timer = setTimeout(() => {
        setFilteredProducts(results);
        setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
    }, [searchTerm, selectedCategory]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Our Grocery Store
        </h1>
        <p className="text-gray-600">Fresh products for your everyday needs</p>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FiX className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FiFilter />
            <span>Filters</span>
            {showFilters ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Category Filter (Desktop) */}
          <div className="hidden md:flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="mt-4 md:hidden p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Filter Status */}
      {(searchTerm || selectedCategory !== "all") && (
        <div className="mb-6 flex items-center gap-3">
          <span className="text-sm text-gray-600">Active filters:</span>
          {searchTerm && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              Search: {searchTerm}
              <button
                onClick={() => setSearchTerm("")}
                className="ml-2 text-gray-500 hover:text-gray-700">
                <FiX size={14} />
              </button>
            </span>
          )}
          {selectedCategory !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
              Category:{" "}
              {categories.find((c) => c.id === selectedCategory)?.name}
              <button
                onClick={() => setSelectedCategory("all")}
                className="ml-2 text-gray-500 hover:text-gray-700">
                <FiX size={14} />
              </button>
            </span>
          )}
          <button
            onClick={clearFilters}
            className="text-sm text-primary hover:underline">
            Clear all
          </button>
        </div>
      )}
      {/* Loading state */}
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {/* Products Grid with animation */}
          {filteredProducts.length > 0 ? (
            <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    originalPrice={product.originalPrice}
                    salePrice={product.salePrice}
                    onSale={product.onSale}
                    to={`/products/${product.id}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any products matching your filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
