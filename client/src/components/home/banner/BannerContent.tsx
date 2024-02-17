export default function BannerContent() {
   return (
      <div className="bg-secondary py-12 px-12 w-full flex flex-col items-start gap-5">
         <div className="w-8/12">
            <p className="text-neutral text-base font-semibold mb-5">New Arrival</p>
            <h1 className="text-primary text-5xl font-bold">Discover Our New Collection</h1>
         </div>
         <p className="text-neutral text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
         </p>
         <button className="w-1/3 py-4 px-3 flex justify-center items-center bg-primary font-semibold text-accent">
            Buy Now
         </button>
      </div>
   );
}
