import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full max-w-full mx-auto px-4 text-white font-candice">
      <h1
        className="w-500px text-4xl font-bold text-[#FB2576] cursor-pointer pl-16"
        onClick={() => console.log("/home")}
      >
        Shredded.
      </h1>
      <ul className="hidden md:flex md:w-[500px] md:flex-row md:space-x-2">
        <li className="p-4 text-lg cursor-pointer">Home</li>
        <li className="p-4 text-lg cursor-pointer">About us</li>
        <li className="p-4 text-lg cursor-pointer">Login</li>
        <li className="p-4 text-lg cursor-pointer">Sign up</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#FB2576] m-4 pt-4">
          {" "}
          Shredded.{" "}
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Login</li>
        <li className="p-4 border-b border-gray-600">Signup</li>
      </ul>
    </div>
  );
}
