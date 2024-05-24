import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../models/Product";

export type ProductState = {
   products: Product[];
};

export type Actions = {
   setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState & Actions>()(
   persist(
      (set) => ({
         products: [],
         setProducts: (products: Product[]) => set({ products }),
      }),
      {
         name: "productStore", // Name of the store for persistence
      }
   )
);
