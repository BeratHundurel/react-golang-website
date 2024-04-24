import { Product } from "../../app/models/product";

interface Props {
   product: Product; // Change to singular to reflect a single card
}

export default function HomeProductCard({ product }: Props) {
   return (
      <div className="home-products-card w-full lg:w-1/4 px-4 mb-10">
         <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-sm" />
         <div className="p-5 bg-accent h-36">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-base text-gray font-medium mt-2 ">{product.description}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
         </div>
      </div>
   );
}
