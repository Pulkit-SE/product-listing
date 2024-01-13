import axios from "axios";

import { createQueryString } from "../../functions";

const BASE_URL = "https://api.escuelajs.co/api/v1"; // Replace with your actual API URL

// types.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface ApiRequestParams {
  offset: number;
  limit: number;
  sort?: string;
  order?: "asc" | "desc";
  // ... include other filter properties like category if your API requires them
}

export interface Category {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
}

export const fetchListingProducts = async (
  params: ApiRequestParams
): Promise<Product[]> => {
  try {
    const queryString = createQueryString(params);
    const response = await axios.get<Product[]>(
      `${BASE_URL}/products${queryString}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
