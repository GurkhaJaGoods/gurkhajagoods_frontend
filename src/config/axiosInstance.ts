// src/config/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // Optional, depending on CORS/auth needs
});

export default axiosInstance;
