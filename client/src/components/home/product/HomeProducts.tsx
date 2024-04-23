import { useQuery } from "@tanstack/react-query";
import HomeProductCard from "./HomeProductCard";
import { useProductStore } from "../../../lib/store";
import { fetchProducts } from "../../../lib/util";
import { useEffect, useMemo } from "react";

export default function HomeProducts() {
   const { products, setProducts } = useProductStore((state) => state);

   const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

   const memoizedData = useMemo(() => data, [data]);
   // Effect to update products when data changes
   useEffect(() => {
      if (memoizedData) {
         setProducts(memoizedData);
      }
   }, [memoizedData, setProducts]);

   return (
      <section className="container home-products-container mb-24 flex flex-col justify-center items-center">
         <h1 className="lg:text-4xl text-3xl font-bold text-neutral mb-8">Our Products</h1>
         <div className="flex flex-row flex-wrap w-11/12 justify-center items-center">
            {products.map((product) => (
               <HomeProductCard key={product.id} product={product} />
            ))}
         </div>
         <button className="bg-white border-primary border-2 text-primary w-56 py-2 font-bold">Show More</button>
      </section>
   );
}
