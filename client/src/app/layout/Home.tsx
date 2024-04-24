import Banner from "../../components/banner/Banner";
import BrowseCategory from "../../components/browse/BrowseCategory";
import HomeProducts from "../../components/product/HomeProducts";
import Room from "../../components/room/Room";
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
