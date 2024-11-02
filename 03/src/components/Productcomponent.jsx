import React from "react";
import arrowicon from "../Assets/breadcrum_arrow.png";

const Productcomponent = (props) => {
  const { product } = props;

  return (
    <div>
      HOME <img src={arrowicon} alt="" />
      SHOP <img src={arrowicon} alt="" />
      {product.category} <img src={arrowicon} alt="" />
      {product.name}
    </div>
  );
};

export default Productcomponent;
