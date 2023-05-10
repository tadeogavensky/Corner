import React, { useState } from "react";
import { Post } from "../../types/Post";

import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2, TbSend } from "react-icons/tb";
import { FiBookmark } from "react-icons/fi";
import { User } from "../../types/User";

interface Props {
  post?: Post;
  user?: User;
}

export const PostFotter = ({ post, user }: Props) => {
  const [showFullCaption, setShowFullCaption] = useState(false);

  const handleShowFullCaption = () => {
   setShowFullCaption(!showFullCaption)

  };

  console.log("showFullCaption:", showFullCaption);

  return (
    <div className="flex flex-col px-2 py-2 space-y-1">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-4">
          <button>
            <AiOutlineHeart size={30} />
          </button>
          <button>
            <TbMessageCircle2 size={30} />
          </button>
          <button>
            <TbSend size={30} />
          </button>
        </div>
        <button>
          <FiBookmark size={30} />
        </button>
      </div>
      <div>
        <p className="font-semibold">{post?.likes.length} likes</p>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex flex-col">
          <p className="font-semibold">{user?.username}</p>
          <div className="flex flex-row">
            {showFullCaption ? (
              <p>{post && post.caption}</p>
            ) : (post && post.caption.length > 50) ? (
              <div className="flex items-center">
                <p className="text-ellipsis">{`${post.caption.substring(
                  0,
                  50
                )}...`}</p>
                <button
                  className="text-blue-500 hover:underline ml-2"
                  onClick={handleShowFullCaption}
                >
                  more
                </button>
              </div>
            ) : (
              <p className="text-ellipsis">{post && post.caption}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
