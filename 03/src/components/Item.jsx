// Item.jsx
import React from "react";

const Item = ({ name, image, oldprice, newprice }) => {
  return (
    <div className="w-64 transition hover:scale-90 ease-in-out mt-5">
      {" "}
      <div>
        <img src={image} alt="img" className="w-full rounded-md" />{" "}
      </div>
      <div className="mt-2 text-center">
        {" "}
        <p className="truncate text-sm font-medium">{name}</p>{" "}
        <div className="flex justify-center items-baseline mt-1 space-x-4">
          {" "}
          <span className="text-lg font-semibold">${newprice}</span>
          <span className="text-sm text-gray-500 line-through">
            ${oldprice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
