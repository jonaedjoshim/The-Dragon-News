import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-semibold lg:text-xl">All categories ({categories.length}) </h2>
      <div className="grid grid-cols-1 mt-5 gap-6">
        {categories.map((category) => (
          <NavLink key={category.id} to={`/category/${category.id}`} className={"btn bg-white border-none lg:px-8 justify-start shadow-none hover:bg-base-200 font-medium lg:text-xl text-accent"}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
