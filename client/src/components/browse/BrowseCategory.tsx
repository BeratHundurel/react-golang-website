import BrowseCategoryList from "./BrowseCategoryList";

export default function BrowseCategory() {
   return (
      <section className="container browse-category-container flex flex-col justify-center items-center mb-14 lg:mb-24">
         <h1 className="lg:text-4xl text-3xl font-bold text-neutral mb-5">Browse The Range</h1>
         <p className="text-neutral text-center font-normal text-lg mb-10">Discover furniture that fits your style and budget</p>
         <BrowseCategoryList />
      </section>
   );
}
