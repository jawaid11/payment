import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../Button";
import Course from "./Course";
import Logo from "./Logo";
import Program from "./Program";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white p-1">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="md:cursor-pointer">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="text-3xl md:hidden" onClick={toggleMenu}>
            {open ? (
              <IoClose className="cursor-pointer" />
            ) : (
              <IoMenu className="cursor-pointer" />
            )}
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="px-3 py-2">
            <Course />
          </li>
          <li className="px-3 py-2">
            <Program />
          </li>
          <li className="px-3 py-2">
            <button>Join</button>
          </li>
          <li className="px-3 py-2">
            <Button />
          </li>
        </ul>
        <ul className="md:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <li>
            <Course />
          </li>
          <li>
            <Program />
          </li>
          <li>
            <button>Join</button>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


