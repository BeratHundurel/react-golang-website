import { Product } from "../models/product";
export const fetchProducts = async (): Promise<Product[]> => {
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
