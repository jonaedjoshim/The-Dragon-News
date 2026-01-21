import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h2 className="font-semibold text-xl mb-5">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <section className="col-span-3">
          <aside>
            <RightAside />
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
