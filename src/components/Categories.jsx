import React, { use } from "react";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
    console.log(categoryPromise);
    const categories = use(categoryPromise)    
  return (
    <div className="font-bold">
      <h2>All categories ({categories.length}) </h2>
    </div>
  );
};

export default Categories;
