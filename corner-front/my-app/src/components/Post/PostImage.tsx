import React from "react";
import { Post } from "../../types/Post";

interface Props {
  image: string;
}

export const PostImage = ({ image }: Props) => {
  return (
    <div>
      <img src={image} className="w-full" alt="" />
    </div>
  );
};
