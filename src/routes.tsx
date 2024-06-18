import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { Favorites } from "./pages/favorites";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
