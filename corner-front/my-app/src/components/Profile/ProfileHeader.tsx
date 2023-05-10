import React from 'react'
import { BsPlusSquare} from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"

interface Props {
    username: string;
}

export const ProfileHeader = ({ username }: Props) => {

  return (
    <div className="flex justify-between items-center px-5">
    <h1 className="feelo-font text-[40px]">{username}</h1>
    <div className="flex items-center space-x-8 ">
      <button>
        <BsPlusSquare size={25} />
      </button>
      <button>
        <AiOutlineMenu size={25} />
      </button>
    </div>
  </div>
  )
}
