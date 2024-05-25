import { useQuery } from "@tanstack/react-query";
import Products from "../../components/product/Products";
import { fetchProducts } from "../api/agent";
import { getUniqueProducts } from "../lib/util";
import Filters from "../../components/filters/Filters";
import { useProductStore } from "../lib/store";
import { useEffect } from "react";
export default function ProductPage() {
   const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
   const { products, setProducts } = useProductStore();

   useEffect(() => {
      if (data) {
         const uniqueProducts = getUniqueProducts(data ?? []);
         setProducts(uniqueProducts);
      }
   }, [data, setProducts]);

   if (isLoading) return <div>Loading...</div>;

   return (
      <section className="container flex flex-row justify-center px-24">
         <Filters />
         <Products title={""} button={false} products={products} width="w-4/5" />
      </section>
   );
}
