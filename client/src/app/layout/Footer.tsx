export default function Footer() {
   return (
      <footer className="w-full flex flex-wrap lg:px-32 px-16">
         <div className="lg:w-1/4 w-full flex flex-col lg:py-16 py-8">
            <h3 className="lg:text-2xl text-xl font-semibold text-primary-text mb-6">Furniture</h3>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6 w-44">
               400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
         </div>
         <div className="lg:w-1/4 w-full flex flex-col lg:py-16 py-8">
            <h3 className="lg:text-2xl text-xl font-semibold text-primary-text mb-6">Links</h3>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Products</p>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Wishlist</p>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Checkout</p>
         </div>
         <div className="lg:w-1/4 w-full flex flex-col lg:py-16 py-8">
            <h3 className="lg:text-2xl text-xl font-semibold text-primary-text mb-6">Help</h3>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Contact</p>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Support</p>
         </div>
         <div className="lg:w-1/4 w-full flex flex-col lg:py-16 py-8">
            <h3 className="lg:text-2xl text-xl font-semibold text-primary-text mb-6">Social</h3>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Facebook</p>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Instagram</p>
            <p className="lg:text-lg text-base font-medium text-secondary-text mb-6">Twitter</p>
         </div>
      </footer>
   );
}
