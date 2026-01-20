import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvier from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvier>
      <RouterProvider router={router} />
    </AuthProvier>
  </StrictMode>,
);
