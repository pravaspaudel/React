import React from "react";
import Item from "../components/Item.jsx";
import data_product from "../Assets/data.js";

const Popular = () => {
  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h1 className="inline-block border-b-2 border-black pb-3 text-5xl">
          POPULAR IN WOMEN
        </h1>
      </div>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {data_product.map((item, id) => (
          <Item
            key={id}
            name={item.name}
            image={item.image}
            newprice={item.new_price}
            oldprice={item.old_price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
