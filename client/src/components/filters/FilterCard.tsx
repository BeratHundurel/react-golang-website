import { Category } from "../../app/models/category";

interface FilterCardProps {
   category: Category;
}

export default function FilterCard({ category }: FilterCardProps) {
   return (
      <>
         <div className="flex items-center mt-5">
            <input type="checkbox" className="mr-2" />
            <p className="text-base font-medium">{category.name}</p>
         </div>
      </>
   );
}
