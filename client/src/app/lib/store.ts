import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ViewProductCategory } from "../models/ViewProductCategory.";
import { fetchProductsByCategoryId } from "../api/agent";
import { Category } from "../models/Category";

export type ProductState = {
   products: ViewProductCategory[];
};

export type CategoryState = {
   category: Category;
};

export type ProductActions = {
   setProducts: (products: ViewProductCategory[]) => void;
   filterProductsByCategoryId: (category_id: number) => Promise<void>;
};

export type CategoryActions = {
   setCategory: (categories: Category) => void;
};

export const useProductStore = create<ProductState & ProductActions>()(
   persist(
      (set) => ({
         products: [],
         setProducts: (products: ViewProductCategory[]) => set({ products }),
         filterProductsByCategoryId: async (category_id: number) => {
            try {
               const filteredProducts = await fetchProductsByCategoryId(category_id);
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

export const useCategoryStore = create<CategoryState & CategoryActions>()(
   persist(
      (set) => ({
         category: {} as Category,
         setCategory: (category: Category) => set({ category }),
      }),
      {
         name: "categoryStore",
      }
   )
);
