import Banner from "./banner/Banner";
import BrowseCategory from "./browse/BrowseCategory";
import HomeProducts from "./products/HomeProducts";

export default function Home() {
   return (
      <>
         <Banner />
         <BrowseCategory />
         <HomeProducts />
      </>
   );
}
