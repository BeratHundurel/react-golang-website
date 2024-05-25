import { useProductStore } from "../../app/lib/store";
import { Category } from "../../app/models/Category";

interface FilterCardProps {
   category: Category;
}

export default function FilterCard({ category }: FilterCardProps) {
   const { filterProductsByCategoryId } = useProductStore();
   const handleClick = () => {
      filterProductsByCategoryId(category.id);
   };
   return (
      <li className="inline-block mt-0 mr-2 mb-3 ml-0" key={category.id}>
         <p className="inline-block bg-accent text-sm rounded-3xl py-3 px-3" onClick={handleClick} role="button">
            {category.name}
         </p>
      </li>
   );
}
