import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductPage from "../layout/ProductPage";
import Home from "../layout/Home";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <Home /> }],
   },
   {
      path: "/products",
      element: <App />,
      children: [{ path: "/products", element: <ProductPage /> }],
   },
]);
