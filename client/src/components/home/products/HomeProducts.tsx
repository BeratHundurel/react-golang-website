import { product } from "../../../app/models/product";
import HomeProductCard from "./HomeProductCard";
const products: product[] = [
   {
      id: 1,
      name: "Syltherine",
      price: 2500,
      description: "Stylish desk",
      image: "/images/product1.png",
   },
   {
      id: 2,
      name: "Leviosa",
      price: 2600,
      description: "Stylish cafe chair",
      image: "/images/product2.png",
   },
   {
      id: 3,
      name: "Lolito",
      price: 4000,
      description: "Luxury big sofa",
      image: "/images/product3.png",
   },
   {
      id: 4,
      name: "Respira",
      price: 3500,
      description: "Outdoor bar table and stool",
      image: "/images/product4.png",
   },
   {
      id: 5,
      name: "Grifo",
      price: 1200,
      description: "Night lamp",
      image: "/images/product5.png",
   },
   {
      id: 6,
      name: "Muggo",
      price: 3200,
      description: "Small mug",
      image: "/images/product6.png",
   },
   {
      id: 7,
      name: "Pingky",
      price: 4500,
      description: "Cute bed set",
      image: "/images/product7.png",
   },
   {
      id: 8,
      name: "Potty",
      price: 3600,
      description: "Minimalist flower pot",
      image: "/images/product8.png",
   },
];

export default function HomeProducts() {
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
