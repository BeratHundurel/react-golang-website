import { Category } from "../../app/models/category";

interface Props {
    browseCard: Category; // Change to singular to reflect a single card
}

export default function BrowseCategoryCard({ browseCard }: Props) {
    return (
        <div className="browse-category-card w-full lg:w-1/3 px-4 flex flex-col justify-center items-center mb-10 lg:mb-0">
            <img src={browseCard.ımage} alt={browseCard.name} className="w-full mb-5" />
            <h2 className="lg:text-3xl text-2xl font-semibold text-neutral">{browseCard.name}</h2>
        </div>
    );
}
