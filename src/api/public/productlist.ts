// api/products.ts
import axiosInstance from "@/config/axiosInstance";
import type { Product } from "@/types/product";

export const getProductLists = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>(`/api/products/`);
  return response?.data.results;
};
