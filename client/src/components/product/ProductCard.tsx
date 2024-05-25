import { ViewProductCategory } from "../../app/models/ViewProductCategory.";

interface Props {
   product: ViewProductCategory; // Change to singular to reflect a single card
}

export default function ProductCard({ product }: Props) {
   return (
      <div className="w-full lg:w-72 px-4 mb-10">
         <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-sm" />
         <div className="p-5 bg-accent h-32">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray font-medium mt-2 ">{product.description}</p>
            <p className="text-base font-semibold mt-2">${product.price}</p>
         </div>
      </div>
   );
}
