import { GiRunningShoe } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useRef, useState } from "react";

const NavBar = () => {
  const showRef = useRef();
  function show() {
    showRef.current.classList.toggle("nav-items");
  }

  return (
    <div className="NavBar fixed top-0 z-10 flex h-[60px] w-full items-center gap-5 bg-white pr-5 shadow-md">
      <div className="logo flex items-center self-stretch bg-gray-800 p-2 text-white">
        <GiRunningShoe className="text-2xl" />
        <Link to="/">
          <span className="block px-2 text-2xl">NIKi </span>
        </Link>
      </div>
      <ul
        ref={showRef}
        className="absolute top-[60px] right-0 left-0 gap-2 overflow-hidden bg-white text-center font-thin shadow-md sm:static sm:flex sm:h-auto sm:shadow-none "
      >
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Discount</a>
        </li>
      </ul>
      <div className="shop ml-auto flex items-center gap-3 text-2xl sm:ml-auto ">
        <div className="cart relative">
          <span className="totalItems">1</span>
          <Link to="/">
            <AiOutlineShoppingCart className="rounded-full p-[1px] hover:bg-gray-200" />
          </Link>
        </div>
        <div className="login">
          <Link to="login">
            <BiLogIn className="rounded-full p-[1px] hover:bg-gray-200" />
          </Link>
        </div>
      </div>
      <div
        onClick={() => show()}
        className="flex cursor-pointer flex-col space-y-[6px] rounded-md p-2 hover:bg-gray-300 sm:hidden"
      >
        <span className="h-[3px] w-[30px] bg-gray-700"></span>
        <span className="h-[3px] w-[30px] bg-gray-700"></span>
        <span className="h-[3px] w-[30px] bg-gray-700"></span>
      </div>
    </div>
  );
};

export default NavBar;
