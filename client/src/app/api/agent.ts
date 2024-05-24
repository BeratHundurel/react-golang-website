import { ViewProductCategory } from "../models/ViewProductCategory.";
import { Category } from "../models/category";
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
}
