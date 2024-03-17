import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import App from "../layout/App";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <Home /> }],
   },
]);
