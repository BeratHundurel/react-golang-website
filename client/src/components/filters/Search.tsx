import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductStore } from "../../app/lib/store";
import { useState } from "react";

export default function Search() {
   const [search, setSearch] = useState(String);
   const { filterProductsBySearch } = useProductStore();
   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      if (event.target.value !== null) {
         filterProductsBySearch(event.target.value);
      }
   };
   return (
      <div className="w-4/5 flex flex-col mb-8">
         <div className="flex items-center justify-between bg-gray-100 rounded py-2 px-3 border-2 border-accent">
            <input type="text" placeholder="Search here" className="w-4/5 bg-gray-100 focus:outline-none" value={search} onChange={handleSearch} />
            <div className="w-0.5 bg-neutral h-4"></div>
            <FontAwesomeIcon icon={faSearch} className="text-neutral" />
         </div>
      </div>
   );
}
