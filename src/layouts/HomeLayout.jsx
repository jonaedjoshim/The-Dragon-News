import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6">
        <aside className="col-span-3 text-center">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
