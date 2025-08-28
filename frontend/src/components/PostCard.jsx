import React from "react";

export default function PostCard({ post }) {
  return (
    <div style={{ 
      border: "1px solid #00f0ff", 
      borderRadius: "6px", 
      padding: "15px", 
      marginBottom: "10px", 
      background: "rgba(0,0,0,0.6)"
    }}>
      <h3 style={{ fontWeight: "bold" }}>{post.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "#a0f0ff" }}>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}
