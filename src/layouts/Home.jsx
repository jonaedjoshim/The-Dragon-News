import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

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
      <main>
        <section>I am left side</section>
        <section>
          <Outlet />
        </section>
        <section> I am right side</section>
      </main>
    </div>
  );
};

export default Home;
