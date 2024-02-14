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
   return (
      <div className="container header-container flex justify-between items-center py-8 px-6">
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
               <img src={src} alt={alt} className="w-5 h-auto" />
            ))}
         </div>
      </div>
   );
}
