import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/Search/SearchBar";
import PostFeed from "../components/Search/PostFeed";
import { Post } from "../types/Post";
import mockPosts from "../components/mockPosts";

export const Explore = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  return (
    <div className="mt-4 space-y-4">
      <div className="px-4">
        <SearchBar />
      </div>
      <PostFeed posts={posts} />
    </div>
  );
};
