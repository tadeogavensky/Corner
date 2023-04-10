export interface Post {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes: { id: number; username: string }[];
    comments: { id: number; username: string; comment: string }[];
    created_at: Date;
    updated_at: Date;
  }
  