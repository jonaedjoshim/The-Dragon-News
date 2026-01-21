import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/auth/login" replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
