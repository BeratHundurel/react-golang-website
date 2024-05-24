import { ViewProductCategory } from "../models/ViewProductCategory.";

export function getUniqueProducts(products: ViewProductCategory[]): ViewProductCategory[] {
   const uniqueProducts: ViewProductCategory[] = [];
   products.forEach((product) => {
      if (!uniqueProducts.find((p) => p.product_id === product.product_id)) {
         uniqueProducts.push(product);
      }
   });
   return uniqueProducts;
}

export function shuffle<T>(array: T[]): T[] {
   const shuffledArray = array.slice();
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
   }
   return shuffledArray;
}
