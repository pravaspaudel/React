import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Productcomponent from "../components/Productcomponent";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  console.log(productId);

  const product = all_product.find(
    (element) => element.id === Number(productId)
  );

  console.log(product);

  return (
    <div>
      <Productcomponent product={product} />
    </div>
  );
};

export default Product;
