import React from "react";

import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { BsPlusSquare, BsHeart } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <nav className="flex justify-evenly items-center w-full bg-white">
        <button className="flex-1">
          <GrHomeRounded />
        </button>
        <button className="flex-1">
          <GrSearch />
        </button>
        <button className="flex-1">
          <BsPlusSquare />
        </button>
        <button className="flex-1">
          <BsHeart />
        </button>
      </nav>
    </div>
  );
};
