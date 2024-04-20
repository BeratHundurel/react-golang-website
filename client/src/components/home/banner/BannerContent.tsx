export default function BannerContent() {
   return (
      <div className="bg-secondary lg:py-12 lg:px-12 px-4 py-4 w-full flex flex-col items-start gap-5">
         <div className="lg:w-8/12 w-11/12">
            <p className="text-neutral lg:text-base text-sm font-semibold lg:mb-5 mb-3">New Arrival</p>
            <h1 className="text-primary lg:text-5xl text-xl font-bold">Discover Our New Collection</h1>
         </div>
         <p className="text-neutral lg:text-base text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
         </p>
         <button className="lg:w-1/3 w-1/2 lg:py-4 py-3 lg:px-3 px-2 flex justify-center items-center bg-primary font-semibold text-white text-sm lg:text-base">
            Buy Now
         </button>
      </div>
   );
}
