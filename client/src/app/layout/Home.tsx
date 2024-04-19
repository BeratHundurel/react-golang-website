import Banner from "../../components/home/banner/Banner";
import BrowseCategory from "../../components/home/browse/BrowseCategory";
import HomeProducts from "../../components/home/product/HomeProducts";
import Room from "../../components/home/room/Room";
import Footer from "./Footer";

export default function Home() {
   return (
      <>
         <Banner />
         <BrowseCategory />
         <HomeProducts />
         <Room />
         <Footer />
      </>
   );
}
