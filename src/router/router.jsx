import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/auth",
    element: <h3>auth layout</h3>,
  },
  {
    path: "/news",
    element: <h3>news layout</h3>,
  },
  {
    path: "/*",
    element: <h3>Error404</h3>,
  },
]);

export default router;
