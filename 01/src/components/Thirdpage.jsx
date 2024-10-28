import React from "react";
import Cards from "./Cards";

const Thirdpage = () => {
  return (
    <div className="bg-[#003000] h-auto flex flex-col md:flex-row justify-center items-center pt-30  ">
      <Cards
        image={"/img/single.png"}
        user={"Single User"}
        amount={"$149"}
        storage={"20GB"}
        usersallowed={"1"}
        upto={"20GB"}
      />
      <Cards
        image={"/img/double.png"}
        user={"Double User"}
        amount={"$249"}
        storage={"40GB"}
        usersallowed={"2"}
        upto={"40GB"}
      />
      <Cards
        image={"/img/triple.png"}
        user={"Triple User"}
        amount={"$349"}
        storage={"60GB"}
        usersallowed={"3"}
        upto={"60GB"}
      />
    </div>
  );
};

export default Thirdpage;
