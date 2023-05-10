import React from "react";
import { Post } from "../types/Post";
import { PostComp } from "../components/PostComp";
import { User } from "../types/User";
import { Header } from "../components/Header";
import mockPosts from "../components/mockPosts";
const posts: Post[] = mockPosts;

const users = [
  {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "mypassword",
    bio: "I'm a web developer",
    profile_picture: "https://randomuser.me/api/portraits/men/1.jpg",
    followers: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "bobsmith" },
    ],
    following: [
      { id: 4, username: "alicejones" },
      { id: 5, username: "stevebrown" },
    ],
    posts_count: 10,
    followers_count: 2,
    following_count: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    username: "janedoe",
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: "mypassword",
    bio: "I'm a graphic designer",
    profile_picture: "https://randomuser.me/api/portraits/women/2.jpg",
    followers: [
      { id: 1, username: "johndoe" },
      { id: 3, username: "bobsmith" },
    ],
    following: [
      { id: 4, username: "alicejones" },
      { id: 5, username: "stevebrown" },
    ],
    posts_count: 5,
    followers_count: 2,
    following_count: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const Home = () => {
  return (
    <div>
      <div className="sm:w-1/2">
        <Header/>
        {posts.map((post) => (
          <PostComp
          post={post}
          user={users.find((user) => user.id === post.user_id)}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};
