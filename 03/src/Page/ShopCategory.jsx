import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item";

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <div>
        <img src={banner} alt="img" />
      </div>

      <div className="flex flex-wrap gap-20 justify-center items-center my-20">
        {all_product.map((item, id) => {
          if (category == item.category) {
            return (
              <Item
                image={item.image}
                key={id}
                newprice={item.new_price}
                name={item.name}
                oldprice={item.old_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
