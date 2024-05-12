import { useQuery } from "@tanstack/react-query";
import Products from "../../components/product/Products";
import { fetchProducts } from "../api/agent";
export default function ProductPage() {
   const { data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
   return (
      <>
         <Products title={""} button={false} products={data ?? []} />
      </>
   );
}
