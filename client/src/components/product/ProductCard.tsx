import { ViewProductCategory } from "../../app/models/ViewProductCategory.";

interface Props {
   product: ViewProductCategory; // Change to singular to reflect a single card
}

export default function ProductCard({ product }: Props) {
   return (
      <div className="w-full lg:w-72 px-4 mb-10 ">
         <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-sm" />
         <div className="group relative z-0 ">
            <div className="p-5 bg-accent h-32 group-hover:contrast-50 group-hover:brightness-50">
               <h3 className="text-lg font-semibold">{product.name}</h3>
               <p className="text-sm text-gray font-medium mt-2 ">{product.description}</p>
               <p className="text-base font-semibold mt-2">${product.price}</p>
            </div>
            <button
               className="bg-white text-primary px-4 py-2 mt-4 z-10 mr-auto ml-auto w-40
                absolute bottom-10 right-0 left-0 rounded-sm group-hover:visible invisible text-base font-semibold ease-out transform transition-transform duration-500"
            >
               Add to cart
            </button>
         </div>
      </div>
   );
}
