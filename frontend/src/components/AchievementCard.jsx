import React from "react";

export default function AchievementCard({ achievement }) {
  return (
    <div style={{ 
      border: "1px solid #00f0ff", 
      borderRadius: "6px", 
      padding: "10px", 
      marginBottom: "10px", 
      background: "rgba(0,0,0,0.6)"
    }}>
      <h4>{achievement.title}</h4>
      <p style={{ fontSize: "0.8rem", color: "#a0f0ff" }}>{achievement.category} | {achievement.date}</p>
    </div>
  );
}
