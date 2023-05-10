import { Post } from "../../types/Post";

interface Props {
  posts: Post[];
}

const PostFeed = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-3">
      {posts.map((post, index) => (
        <div
          className={`border border-white ${
            index % 3 === 0 ? "border-b-0 border-r-0" : "border-t-0"
          }`}
          key={post.id}
        >
          <img src={post.image}alt="" />
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
