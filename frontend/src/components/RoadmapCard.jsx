import React from "react";

export default function RoadmapCard({ goal }) {
  const progress = goal.status === "In Progress" ? 50 : goal.status === "Completed" ? 100 : 0;

  return (
    <div style={{
      border: "1px solid #00f0ff",
      borderRadius: "6px",
      padding: "10px",
      marginBottom: "10px",
      background: "rgba(0,0,0,0.6)"
    }}>
      <h4>{goal.goal}</h4>
      <p style={{ fontSize: "0.8rem", color: "#a0f0ff" }}>{goal.phase}</p>
      <div style={{
        height: "8px",
        width: "100%",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "4px",
        marginTop: "5px"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#00f0ff",
          borderRadius: "4px"
        }} />
      </div>
    </div>
  );
}
