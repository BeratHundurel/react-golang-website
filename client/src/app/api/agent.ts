import { ViewProductCategory } from "../models/ViewProductCategory.";
export const fetchProducts = async (): Promise<ViewProductCategory[]> => {
   const response = await fetch("http://localhost:3000/fetchProducts", {
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
