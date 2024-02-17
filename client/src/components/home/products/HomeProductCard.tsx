import { product } from "../../../app/models/product";

interface Props {
   product: product; // Change to singular to reflect a single card
}

export default function HomeProductCard({ product }: Props) {
   return (
      <div className="product-card bg-white rounded-lg shadow-lg p-4">
         <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
         <div className="mt-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
         </div>
      </div>
   );
}
