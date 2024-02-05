import React, { useState } from "react";
import {MenuOutlined} from '@ant-design/icons'
const NavBar = () => {
  const [navDroped, setNavDroped] = useState(false);

  return (
    <nav className="w-screen min-h-[70px] max-md:h-fit md:h-[70px] flex max-md:flex-col md:items-center  md:justify-between overflow-hidden transition-all ease-out duration-500">
      <div className="h-[40px] m-5">
        <img
          src="https://srkrcse.com/assets/images/logo.png"
          className="h-full"></img>
      </div>
      <ul
        className={`flex gap-5 pr-5 m-5 max-md:flex-col max-md:${
          !navDroped ? "hidden" : ""
        }`}>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          Home
        </li>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          About
        </li>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          Explore
        </li>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          Academic
        </li>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          Administration
        </li>
        <li className="text-[#7c7c7d] cursor-pointer hover:text-[#4a4a4b]">
          Accomplishments
        </li>
      </ul>
      <span
        className={`material-symbols-outlined md:hidden absolute flex justify-center top-2 w-12 right-5 cursor-pointer text-[#7c7c7d] hover:text-[#4a4a4b] text-3xl border-solid border-[#7c7c7d] p-1 ${
          navDroped ? "border-[4px]" : "border-[1px]"
        } rounded-md`}
        onClick={() => {
          setNavDroped(!navDroped);
        }}>
        <MenuOutlined />
      </span>
    </nav>
  );
};

export default NavBar;