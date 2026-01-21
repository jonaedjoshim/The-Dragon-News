import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import NewsDetails from "../pages/NewsDtails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h3>Error404</h3>,
  },
]);

export default router;
