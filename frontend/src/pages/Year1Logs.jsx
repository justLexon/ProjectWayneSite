import React from "react";
import postsData from "../data/posts.json";
import PostCard from "../components/PostCard";

export default function Logs() {
  // Filter posts for Year 1 only
  const year1Posts = postsData.filter((post) => post.year === 1);

  return (
    <div>
      <h1>Year 1 Logs</h1>
      {year1Posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
