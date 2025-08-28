import React from "react";
import roadmapData from "../data/blueprint.json";
import RoadmapCard from "../components/RoadmapCard";

export default function Blueprint() {
  return (
    <div>
      <h1>Blueprint</h1>
      {roadmapData.map((goal) => (
        <RoadmapCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
}
