// Newcollection.jsx
import React from "react";
import Item from "./Item";
import new_collections from "../Assets/new_collections.js";

const Newcollection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20">
      {new_collections.map((item, id) => (
        <Item
          name={item.name}
          image={item.image}
          key={id}
          newprice={item.new_price}
          oldprice={item.old_price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Newcollection;
