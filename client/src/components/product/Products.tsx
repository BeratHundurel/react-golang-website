import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../app/api/agent";
import ProductCard from "./ProductCard";

interface ProductsProps {
   title: string;
   button: boolean;
}

export default function Products({ title, button }: ProductsProps) {
   const { data, isLoading, isError } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

   return (
      <section className="container home-products-container mb-24 flex flex-col justify-center items-center">
         {title && <h1 className="lg:text-4xl text-3xl font-bold text-neutral mb-8">{title}</h1>}
         {isLoading && <div>Loading...</div>}
         {isError && <div>Error</div>}
         {data && (
            <>
               <div className="flex flex-row flex-wrap w-11/12 justify-center items-center">
                  {data.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
               {button && <button className="bg-white border-primary border-2 text-primary w-56 py-2 font-bold">Show More</button>}
            </>
         )}
      </section>
   );
}
