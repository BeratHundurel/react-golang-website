import { useCallback, useEffect } from "react";
import { useCategoryStore, useProductStore } from "../../app/lib/store";
import { Category } from "../../app/models/Category";

interface FilterCardProps {
   category: Category;
}

export default function FilterCard({ category }: FilterCardProps) {
   const { filterProductsByCategoryId } = useProductStore();
   const { category: selectedCategory, setCategory } = useCategoryStore();
   const handleClick = useCallback(() => {
      filterProductsByCategoryId(category.id);
      setCategory(category);
   }, [category, filterProductsByCategoryId, setCategory]);

   useEffect(() => {
      if (selectedCategory != null && selectedCategory.id !== undefined) {
         filterProductsByCategoryId(selectedCategory.id);
      }
   }, [selectedCategory, filterProductsByCategoryId]);

   return (
      <li className="inline-block mt-0 mr-2 mb-3 ml-0" key={category.id}>
         <p
            className={`inline-block ${
               selectedCategory && selectedCategory.id === category.id ? "bg-neutral text-white" : "bg-accent text-neutral"
            } text-sm rounded-3xl py-3 px-3`}
            onClick={handleClick}
            role="button"
         >
            {category.name}
         </p>
      </li>
   );
}
