import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h3>home layout</h3>,
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
