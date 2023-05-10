import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-100 p-2 rounded-lg "
      />
    </div>
  );
};
