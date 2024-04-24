import BrowseCategoryCard from "./BrowseCategoryCard.tsx";
import { Category } from "../../app/models/category.ts";

const browseCard: Category[] = [
   { src: "/images/Dining.png", title: "Dining" },
   { src: "/images/Living.png", title: "Living" },
   { src: "/images/Bedroom.png", title: "Bedroom" },
];

export default function BrowseCategoryList() {
   return (
      <div className="browse-category-list flex flex-row w-11/12 flex-wrap justify-center items-center">
         {browseCard.map((card) => (
            <BrowseCategoryCard key={card.title} browseCard={card} />
         ))}
      </div>
   );
}
