import { useQuery } from "@tanstack/react-query";
import Products from "../../components/product/Products";
import { fetchProducts } from "../api/agent";
import { getUniqueProducts } from "../lib/util";
import Filters from "../../components/filters/Filters";
export default function ProductPage() {
   const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
   const products = getUniqueProducts(data ?? []);
   return (
      <>
         <Filters />
         <Products title={""} button={false} products={products} />
      </>
   );
}
