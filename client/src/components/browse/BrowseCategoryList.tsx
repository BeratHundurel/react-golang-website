import BrowseCategoryCard from "./BrowseCategoryCard.tsx";
import { Category } from "../../app/models/category";

const browseCard: Category[] = [
   { id: 2, ımage: "/images/Dining.png", name: "Dining" },
   { id: 1, ımage: "/images/Living.png", name: "Living" },
   { id: 3, ımage: "/images/Bedroom.png", name: "Bedroom" },
];

export default function BrowseCategoryList() {
   return (
      <div className="browse-category-list flex flex-row w-11/12 flex-wrap justify-center items-center">
         {browseCard.map((card) => (
            <BrowseCategoryCard key={card.id} browseCard={card} />
         ))}
      </div>
   );
}
