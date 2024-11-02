import React from "react";
import logo from "../Assets/logo.png";
import instaicon from "../Assets/instagram_icon.png";
import pinicon from "../Assets/pintester_icon.png";
import whatsappicon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-400">
      <div className="flex justify-center items-center gap-4 mt-5">
        <img src={logo} alt="img" />
        <h1 className="font-bold text-2xl">SHOPPER</h1>
      </div>

      <div>
        <ul className="mt-10 flex justify-center gap-7">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex justify-center items-center gap-5 mt-9">
        <img src={instaicon} alt="insta-icon" />
        <img src={pinicon} alt="pin-icon" />
        <img src={whatsappicon} alt="whatsapp-icon" />
      </div>

      <div className="grid place-content-center mt-10 mb-10">
        <span>Copyright @ 2023 - All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
