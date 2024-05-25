import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ViewProductCategory } from "../models/ViewProductCategory.";
import { fetchProductsByCategoryId } from "../api/agent";

export type ProductState = {
   products: ViewProductCategory[];
};

export type Actions = {
   setProducts: (products: ViewProductCategory[]) => void;
   filterProductsByCategoryId: (category_id: number) => Promise<void>;
};

export const useProductStore = create<ProductState & Actions>()(
   persist(
      (set) => ({
         products: [],
         setProducts: (products: ViewProductCategory[]) => set({ products }),
         filterProductsByCategoryId: async (category_id: number) => {
            try {
               const filteredProducts = await fetchProductsByCategoryId(category_id);
               console.log("Filtered products:", filteredProducts);
               set({ products: filteredProducts });
            } catch (error) {
               console.error("Error fetching products:", error);
            }
         },
      }),
      {
         name: "productStore", // Name of the store for persistence
      }
   )
);
