import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <nav className="text-white flex justify-around items-center max-w-[1240px] px-4 mx-auto h-24">
      <h1 className="w-full text-3xl font-bold text-[#00df91]">React.</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div className="md:hidden">
        <MdMenu className="text-white text-2xl" onClick={handleNav} />
      </div>

      {nav && (
        <div
          className="fixed left-0 top-0 w-[68%] h-full bg-[#000300] md:hidden"
          onClick={handleNav}
        >
          <h1 className="w-full text-3xl p-4 font-bold text-[#00df91]">
            React.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
