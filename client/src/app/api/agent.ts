import { ViewProductCategory } from "../models/ViewProductCategory.";
import { Category } from "../models/Category";
export const fetchProducts = async (): Promise<ViewProductCategory[]> => {
   const response = await fetch("http://localhost:3000/fetchProducts", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const products = await response.json();
   return products;
};

export const fetchCategories = async (): Promise<Category[]> => {
   const response = await fetch("http://localhost:3000/fetchCategories", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const categories = await response.json();
   return categories;
};

export const fetchProductsByCategoryId = async (category_id: number): Promise<ViewProductCategory[]> => {
   const response = await fetch(`http://localhost:3000/filterByCategory?category_id=${category_id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const products = await response.json();
   return products;
};

export const fetchProductsBySearch = async (search: string): Promise<ViewProductCategory[]> => {
   const response = await fetch(`http://localhost:3000/filterBySearch?search=${search}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw new Error("Network response was not ok");
   }
   const products = await response.json();
   return products;
};
