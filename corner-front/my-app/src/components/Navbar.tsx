import React from "react";
import { GrHomeRounded, GrSearch } from "react-icons/gr";
import { BsPlusSquare, BsHeart, BsNewspaper } from "react-icons/bs";
import { BiUser, BiMoviePlay } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import { User } from "../types/User";

interface Props {
  image: string;
}

export const Navbar = ({ image }: Props) => {
  return (
    <div className="sm:w-1/2 fixed bottom-0 left-0 right-0 border-t-2 border-gray-200 bg-white mb-0">
      <nav className="flex justify-evenly items-center">
        <NavLink
          to="/"
          className={`flex-1 flex justify-center py-2`}
          title="Home feed"
        >
          {({ isActive }) => (
            <GrHomeRounded size={25} className={isActive ? "fill-black" : ""} />
          )}
        </NavLink>
        <NavLink
          to="/explore"
          className={`flex-1 flex justify-center py-2`}
          title="Explore"
        >
          {({ isActive }) => (
            <GrSearch size={25} className={isActive ? "" : ""} />
          )}
        </NavLink>
        <NavLink
          to="/new-post"
          className={`flex-1 flex justify-center py-2`}
          title="New post"
        >
          {({ isActive }) => (
            <BsPlusSquare size={25} className={isActive ? "fill-black" : ""} />
          )}
        </NavLink>
        <NavLink
          to="/news"
          className={`flex-1 flex justify-center py-2`}
          title="News"
        >
          {({ isActive }) => (
            <BsNewspaper size={25} className={isActive ? "fill-black" : ""} />
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className={`flex-1 flex justify-center py-2`}
          title="Profile"
        >
          {({ isActive }) => (
            <div className="w-10 h-10 flex justify-center items-center">
              <img
                src={image}
                alt="profile"
                className={
                  isActive
                    ? "rounded-full p-[0.8px] border-blue-500 border-[2px] box-border"
                    : "rounded-full box-border p-[0.8px]"
                }
              />
            </div>
          )}
        </NavLink>
      </nav>
    </div>
  );
};
