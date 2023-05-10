import React from "react";
import { ProfileHeader } from "../components/Profile/ProfileHeader";
import { Post } from "../types/Post";
import { User } from "../types/User";

interface Props {
  user: User;
  post: Post;
}




export const Profile = ({ user, post }: Props) => {
  return (
    <div>
      <ProfileHeader username={user.username} />
    </div>
  );
};
