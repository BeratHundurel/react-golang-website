import Banner from "../../components/home/banner/Banner";
import BrowseCategory from "../../components/home/browse/BrowseCategory";
import HomeProducts from "../../components/home/products/HomeProducts";
import Room from "../../components/home/rooms/Room";

export default function Home() {
   return (
      <>
         <Banner />
         <BrowseCategory />
         <HomeProducts />
         <Room />
      </>
   );
}
