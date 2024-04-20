import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const midLinks = [
   { title: "Home", path: "/" },
   { title: "Shop", path: "/shop" },
   { title: "About", path: "/about" },
   { title: "Contact", path: "/contact" },
];

const accountLinks = [
   { src: "/images/profile.png", alt: "profile-logo" },
   { src: "/images/search.png", alt: "search-logo" },
   { src: "/images/heart.png", alt: "heart-logo" },
   { src: "/images/cart.png", alt: "cart-logo" },
];

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   console.log(isMenuOpen);

   return (
      <>
         <header className="container header-container lg:flex hidden justify-between items-center py-8 px-6">
            <div className="header-brand w-40">
               <img src="/images/brand.png" alt="logo" className="object-cover w-full" />
            </div>
            <div className="header-links w-3/6">
               <ul className="flex justify-center gap-28">
                  {midLinks.map(({ title, path }) => (
                     <li key={path} className="text-base font-semibold">
                        <Link to={path}>{title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="header-account w-1/6 flex items-center justify-around">
               {accountLinks.map(({ src, alt }) => (
                  <img src={src} alt={alt} key={alt} className="w-5 h-auto" />
               ))}
            </div>
         </header>
         <header className="container mobile-header-container flex lg:hidden justify-between items-center py-8 px-6">
            <div className="header-brand w-2/6">
               <img src="/images/brand.png" alt="logo" className="object-cover w-full" />
            </div>
            <div className="header-links w-3/6 flex items-center gap-3">
               <div className="header-account w-4/6 flex items-center justify-around gap-2">
                  {accountLinks.map(({ src, alt }) => (
                     <img src={src} alt={alt} key={alt} className="w-5 h-auto" />
                  ))}
               </div>
               <div className="hamburger-menu w-2/6 flex flex-col gap-1 h-5 items-center justify-center" onClick={toggleMenu}>
                  <span className="w-5 h-0.5 bg-primary"></span>
                  <span className="w-5 h-0.5 bg-primary"></span>
                  <span className="w-5 h-0.5 bg-primary"></span>
               </div>
            </div>
            {isMenuOpen && (
               <div className="mobile-menu w-2/3 h-screen bg-white fixed top-0 right-0 z-50 flex flex-col py-12 px-12">
                  <div className="flex justify-end mb-6">
                     <FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
                  </div>
                  <ul className="flex flex-col gap-3 items-center">
                     {midLinks.map(({ title, path }) => (
                        <li key={path} className="text-neutral text-base font-semibold">
                           <Link to={path}>{title}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </header>
      </>
   );
}
