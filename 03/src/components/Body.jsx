import React from "react";
import bodyimage from "../Assets/body_image.png";
import handicon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";

const Body = () => {
  return (
    <div className="flex justify-between items-center  bg-gradient-to-b from-pink-200 to-white">
      <div className="ml-20 mt-[-20rem]">
        <h2 className="font-bold">NEW ARRIVALS ONLY</h2>
        <div className="flex gap-3 mb-2">
          <h2 className="text-6xl">new </h2>
          <img src={handicon} className="aspect-square h-16" alt="" />
        </div>
        <p className="font-bold text-6xl">collections</p>
        <p className="font-bold text-6xl">for everyone</p>

        <div className="flex items-center justify-center mt-10 bg-red-500 w-60 rounded-full p-2">
          <button className="flex items-center gap-2 px-2 py-2 text-white text-lg">
            Latest Collection
            <img src={arrow} alt="Arrow" className="h-5" />
          </button>
        </div>
      </div>

      <div>
        <img src={bodyimage} alt="" />
      </div>
    </div>
  );
};
export default Body;
