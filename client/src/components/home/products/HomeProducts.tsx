import { product } from "../../../app/models/product";
import HomeProductCard from "./HomeProductCard";
const products: product[] = [
   {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
      image: "/images/product1.jpg",
   },
   {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "Product 2 description",
      image: "/images/product2.jpg",
   },
   {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "Product 3 description",
      image: "/images/product3.jpg",
   },
   {
      id: 4,
      name: "Product 4",
      price: 400,
      description: "Product 4 description",
      image: "/images/product4.jpg",
   },
   {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "Product 5 description",
      image: "/images/product5.jpg",
   },
   {
      id: 6,
      name: "Product 6",
      price: 600,
      description: "Product 6 description",
      image: "/images/product6.jpg",
   },
];

export default function HomeProducts() {
   return (
      <section className="container mx-auto mt-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
               <HomeProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>
   );
}
