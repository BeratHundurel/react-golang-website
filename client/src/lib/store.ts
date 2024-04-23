import { create } from "zustand";
import { Product } from "../models/product";

export type ProductState = {
   products: Product[];
};

export type Actions = {
   setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState & Actions>()((set) => ({
   products: [],
   setProducts: (products: Product[]) => set({ products }),
}));
