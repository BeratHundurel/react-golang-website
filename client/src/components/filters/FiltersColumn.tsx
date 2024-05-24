import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../app/api/agent";
import FilterCard from "./FilterCard";
import { Category } from "../../app/models/category";

export default function FiltersColumn() {
    const { data } = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
    return (
        <>
        <h3 className="text-lg font-semibold text-gray-800">Anasayfa {">"} Ürünler</h3>
         {data?.map((category: Category) => <FilterCard category={category} />)}
        </>
    );
}
