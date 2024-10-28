import React from "react";

const Analyte = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-black h-[100vh]">
      <div className="mx-auto flex flex-col md:flex-row items-center">
        <img
          src="img/laptop.jpg"
          alt="Laptop"
          className="w-[500px] mx-auto my-4"
        />
        <div className="md:ml-8">
          <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold my-2">Manage data</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum
            harum quis sit dolore voluptate itaque repellendus eaque error iste
            deserunt eum, rerum placeat maxime officiis alias quam. Doloremque
            assumenda distinctio quis placeat. Ea, repellat consequatur rerum
            facilis doloremque tempora ullam voluptate nesciunt, odit magnam
            iure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analyte;
