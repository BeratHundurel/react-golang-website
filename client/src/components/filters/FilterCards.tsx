import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../app/api/agent";
import FilterCard from "./FilterCard";
import { Category } from "../../app/models/Category";

export default function FilterCards() {
   const { data } = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
   return (
      <ul>
         {data?.map((category: Category) => (
            <FilterCard category={category} key={category.id} />
         ))}
      </ul>
   );
}
