import React from "react";
import postsData from "../data/posts.json";
import PostCard from "../components/PostCard";

export default function Logs() {
  return (
    <div>
      <h1>Logs</h1>
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
