import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Details } from "./pages/details";

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
