import React from "react";

const Navigation = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value); // Call onSearch with the input value
  };

  return (
    <nav className="text-white bg-[#000300] pb-5">
      <div className="flex md:justify-between md:flex-row gap-5 flex-col md:p-16 p-10">
        <h1 className="text-3xl">Foody Zone</h1>
        <input
          className="border-gray-600 rounded-md bg-[#000300] pl-3 border-solid border-2 h-10 md:w-40 w-48"
          type="text"
          placeholder="search..."
          onChange={handleInputChange} // Handle input changes
        />
      </div>
      <div className="flex font-bold flex-row gap-4 text-center justify-center text-gray-600">
        <button className="bg-[#ff4343] md:p-4 p-2 rounded-md">All</button>
        <button className="bg-[#ff4343] md:p-4 p-2 rounded-md">
          Breakfast
        </button>
        <button className="bg-[#ff4343] md:p-4 p-2 rounded-md">Lunch</button>
        <button className="bg-[#ff4343] md:p-4 p-2 rounded-md">Dinner</button>
      </div>
    </nav>
  );
};

export default Navigation;
