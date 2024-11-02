import React from "react";
import exclusiveimage from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="m-40  bg-gradient-to-b from-pink-200 to-white flex  justify-between items-center">
      <div className="ml-20">
        <p className="font-bold text-5xl mb-4">Exclusive </p>
        <p className="font-bold text-5xl mb-4">Offers For You</p>
        <p className="font-semibold ">ONLY ON BEST SELLERS PRODUCTS</p>

        <button className="flex items-center justify-center gap-2 px-2 py-2 text-white text-lg  bg-red-500 w-60 rounded-full p-2 mt-4">
          {" "}
          Check Now
        </button>
      </div>

      <div>
        <img src={exclusiveimage} alt="" />
      </div>
    </div>
  );
};

export default Offer;
