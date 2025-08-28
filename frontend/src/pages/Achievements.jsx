import React from "react";
import achievementsData from "../data/achievements.json";
import AchievementCard from "../components/AchievementCard";

export default function Achievements() {
  return (
    <div>
      <h1>Achievements</h1>
      {achievementsData.map((ach) => (
        <AchievementCard key={ach.id} achievement={ach} />
      ))}
    </div>
  );
}
