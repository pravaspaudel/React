import React from "react";
import { ReactTyped } from "react-typed";

const Body = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center pt-100 mt-[-96px]">
      <div>
        <p className="text-green-400 text-xl text-center md:text-3xl font-bold">
          GROWING WITH DATA ANALYTICS
        </p>
        <p className="text-center text-2xl md:text-3xl">Grow with data</p>
      </div>
      <div className="flex flex-col md:flex-row text-2xl md:text-3xl text-center">
        <p className="md:text-3xl text-2xl">Fast, flexible financing for</p>

        <ReactTyped
          className="text-gray-500 md:ml-2"
          strings={["SAAS", "BUILD", "DEVELOP"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default Body;
