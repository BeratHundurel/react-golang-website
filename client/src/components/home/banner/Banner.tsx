import BannerContent from "./BannerContent";
import "./banner.css";
export default function Banner() {
   return (
      <section className="container banner-container mb-24">
         <div className="banner">
            <img src="/images/banner.png" alt="banner" className="object-cover w-full h-full" />
         </div>
         <div className="banner-content absolute top-1/3 lg:left-1/2 left-1/3 lg:w-5/12 w-6/12">
            <BannerContent />
         </div>
      </section>
   );
}
