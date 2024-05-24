import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/banner/Banner";
import BrowseCategory from "../../components/browse/BrowseCategory";
import Products from "../../components/product/Products";
import Room from "../../components/room/Room";
import { fetchProducts } from "../api/agent";
import { getUniqueProducts, shuffle } from "../lib/util";

export default function Home() {
   const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
   let products = getUniqueProducts(data ?? []);
   products = shuffle(products);
   return (
      <>
         <Banner />
         <BrowseCategory />
         <Products title={"Our Products"} button={true} products={products ?? []} />
         <Room />
      </>
   );
}
