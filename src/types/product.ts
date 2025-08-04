// types/product.ts
export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  brand: Brand[];
}

export interface Product {
  id: number;
  brand: Brand;
  category: Category;
  created_at: string;
  description: string;
  image: string;
  name: string;
  price: string;
  quantity_in_stock: number;
  sale_price: string;
  status: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
}
