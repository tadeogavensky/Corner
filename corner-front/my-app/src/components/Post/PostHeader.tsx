import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { User } from "../../types/User";

interface Props {
    user?: User;
  }
  

export const PostHeader = ({ user }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between px-3 py-2 w-full">
      <div className="flex flex-row  items-center justify-center space-x-2">
        <a href="" className="w-10 h-10 flex justify-center items-center">
          {user?.profile_picture && (
            <img
              src={user?.profile_picture}
              alt="profile"
              className="w-10 h-10 rounded-full mr-2"
            />
          )}
        </a>
        <p className="text-lg font-semibold">{user?.username}</p>
      </div>
      <button>
        <BsThreeDots size={20} />
      </button>
    </div>
  );
};
