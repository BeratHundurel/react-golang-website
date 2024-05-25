import FilterCards from "./FilterCards";

export default function Filters() {
   return (
      <div className="w-1/5 flex flex-col">
         <h3 className="text-lg font-semibold text-gray-800 mb-6">Anasayfa {">"} Ürünler</h3>
         <FilterCards />
      </div>
   );
}
