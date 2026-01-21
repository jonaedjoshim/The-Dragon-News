import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../pages/Loading";

const Home = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 h-fit top-2 sticky">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 h-fit top-2 sticky">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
