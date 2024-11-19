import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto py-4">
        <header className="text-3xl font-bold text-center mb-4">
          This is Navbar
        </header>
        <ul className="flex justify-center gap-10">
          <Link to="/" className="hover:text-yellow-400">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to="/cart" className="hover:text-yellow-400 ">
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
