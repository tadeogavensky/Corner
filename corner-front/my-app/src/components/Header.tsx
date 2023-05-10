import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BiMessageSquareCheck } from "react-icons/bi";
import { BsHeart, BsMessenger } from "react-icons/bs";
export const Header = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <h1 className="feelo-font text-[40px]">FeeLo</h1>
      <div className="flex items-center space-x-8 ">
        <button>
          <BsHeart size={25} />
        </button>
        <button>
          <BsMessenger size={25} />
        </button>
      </div>
    </div>
  );
};
