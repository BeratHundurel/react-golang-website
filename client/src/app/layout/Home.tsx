import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/banner/Banner";
import BrowseCategory from "../../components/browse/BrowseCategory";
import Products from "../../components/product/Products";
import Room from "../../components/room/Room";
import { fetchProducts } from "../api/agent";

export default function Home() {
   const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
   const products = data
      ? data
           .slice()
           .sort(() => Math.random() - 0.5)
           .slice(0, 8)
      : [];
   return (
      <>
         <Banner />
         <BrowseCategory />
         <Products title={"Our Products"} button={true} products={products ?? []} />
         <Room />
      </>
   );
}
