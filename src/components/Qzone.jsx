import React from "react";
import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playGroundImage from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 *:border p-4">
      <h2 className="font-semibold text-xl space-y-5">Q-Zone</h2>
      <hr className="my-2 text-gray-300" />
      <img className="mx-auto" src={swimmingImage} alt="swimmingImage" />
      <img className="mx-auto" src={classImage} alt="classImage" />
      <img className="mx-auto" src={playGroundImage} alt="playGroundImage" />
    </div>
  );
};

export default Qzone;
