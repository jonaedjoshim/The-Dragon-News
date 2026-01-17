import React, { Suspense } from "react";
import Categories from "../categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
