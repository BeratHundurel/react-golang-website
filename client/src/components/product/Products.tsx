import ProductCard from "./ProductCard";
import { ViewProductCategory } from "../../app/models/ViewProductCategory.";

interface ProductsProps {
   title: string;
   button: boolean;
   products: ViewProductCategory[];
   width: string;
}

export default function Products({ title, button, products, width }: ProductsProps) {
   return (
      <div className={`flex flex-col mb-24 px-12 justify-center items-center ${width}`}>
         {title && <h1 className="lg:text-4xl text-3xl font-bold text-neutral mb-8">{title}</h1>}
         {products && (
            <>
               <div className="flex flex-row flex-wrap justify-center">
                  {products.map((product) => (
                     <ProductCard product={product} key={product.product_id}/>
                  ))}
               </div>
               {button && <button className="bg-white border-primary border-2 text-primary w-56 py-2 font-bold">Show More</button>}
            </>
         )}
      </div>
   );
}
