import React from "react";
import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playGroundImage from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200  p-4">
      <h2 className="font-semibold text-xl space-y-5">Q-Zone</h2>
      <hr className="my-2 text-gray-300" />
      <img src={swimmingImage} alt="swimmingImage" />
      <img src={classImage} alt="classImage" />
      <img src={playGroundImage} alt="playGroundImage" />
    </div>
  );
};

export default Qzone;
