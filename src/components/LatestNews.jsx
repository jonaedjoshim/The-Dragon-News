import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex bg-base-200 items-center my-3 gap-4 p-5">
      <p className="text-base-100 bg-secondary px-6 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
