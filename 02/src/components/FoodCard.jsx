import React from "react";

const FoodCard = ({ name, type, image, text, price }) => {
  return (
    <div className="flex h-60 md:max-w-[28rem] max-w-[24rem] bg-gray-800 rounded-lg p-5 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div>
        <img
          src={image}
          className="aspect-square rounded-full shadow-lg"
          alt="Food"
        />
      </div>
      <div className="w-2/3 pl-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">{name}</h1>
          <p className="text-sm text-gray-400 mb-2">{text}</p>
          <p className="text-xs text-gray-500 italic">{type}</p>
        </div>
        <div className="flex justify-end mt-4" />
      </div>
    </div>
  );
};

export default FoodCard;
