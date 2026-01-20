import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default AuthLayout;
