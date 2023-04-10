export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    password: string;
    bio: string;
    profile_picture: string;
    followers: { id: number; username: string }[];
    following: { id: number; username: string }[];
    posts_count: number;
    followers_count: number;
    following_count: number;
    created_at: Date;
    updated_at: Date;
  }
  