import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
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
