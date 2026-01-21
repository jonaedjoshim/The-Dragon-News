import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="p-7 shadow">
      <img
        src={news.image_url}
        alt="image"
        className="w-full h-135 object-cover mb-5"
      />
      <h2 className="font-bold text-2xl mb-2">{news.title}</h2>
      <p className="font-medium text-[#706F6F]">{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="btn bg-secondary text-white mt-8"
      >
        <FaArrowLeft /> All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
