import React, { useState } from "react";
import logo from "/Assets/logo.png";
import cartlogo from "/Assets/cartlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clickedelement, setClickedElement] = useState("shop");

  return (
    <div className="flex justify-around mt-6 border-b-red-500 items-center pb-2">
      <div className="flex justify-center items-center">
        <img src={logo} alt="Shopper Logo" />
        <h1 className="text-2xl font-bold">SHOPPER</h1>
      </div>

      <div>
        <ul className="flex justify-center items-center gap-10 text-xl">
          <li
            onClick={() => setClickedElement("shop")}
            className={`cursor-pointer ${
              clickedelement === "shop" ? "border-b-2 border-black" : ""
            }`}
          >
            <Link to="/">Shop</Link>
          </li>
          <li
            onClick={() => setClickedElement("men")}
            className={`cursor-pointer ${
              clickedelement === "men" ? "border-b-2 border-black" : ""
            }`}
          >
            <Link to="/men">Men</Link>
          </li>
          <li
            onClick={() => setClickedElement("women")}
            className={`cursor-pointer ${
              clickedelement === "women" ? "border-b-2 border-black" : ""
            }`}
          >
            <Link to="/women">Women</Link>
          </li>
          <li
            onClick={() => setClickedElement("child")}
            className={`cursor-pointer ${
              clickedelement === "child" ? "border-b-2 border-black" : ""
            }`}
          >
            <Link to="/kid">Child</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between gap-10 items-center">
        <button className="text-lg w-32 border-2 p-4 rounded-3xl">
          <Link to="/login">Login</Link>{" "}
        </button>
        <Link to="/cart">
          <img
            src={cartlogo}
            alt="Cart Logo"
            className="aspect-square h-10 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
