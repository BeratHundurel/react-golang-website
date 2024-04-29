import Banner from "../../components/banner/Banner";
import BrowseCategory from "../../components/browse/BrowseCategory";
import HomeProducts from "../../components/product/Products";
import Room from "../../components/room/Room";

export default function Home() {
   return (
      <>
         <Banner />
         <BrowseCategory />
         <HomeProducts title={"Our Products"} button={true} /> // Fix: Pass the title prop as a string
         <Room />
      </>
   );
}
