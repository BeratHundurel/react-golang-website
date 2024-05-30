import BrowseCategoryCard from "./BrowseCategoryCard.tsx";
import { Category } from "../../app/models/Category";

const browseCard: Category[] = [
   { id: 2, image: "/images/Dining.png", name: "Dining" },
   { id: 1, image: "/images/Living.png", name: "Living" },
   { id: 3, image: "/images/Bedroom.png", name: "Bedroom" },
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
