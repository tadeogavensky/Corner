import React, { useState } from "react";
import { User } from "../types/User";
import { Post } from "../types/Post";

import { PostHeader } from "./Post/PostHeader";
import { PostFotter } from "./Post/PostFotter";
import { PostImage } from "./Post/PostImage";

interface Props {
  user?: User;
  post: Post;
}

export const PostComp = ({ user, post }: Props) => {
  return (
    <div className="flex flex-col">
      <PostHeader user={user} />
      <PostImage image={post.image}/>
      <PostFotter user={user} post={post} />
    </div>
  );
};
