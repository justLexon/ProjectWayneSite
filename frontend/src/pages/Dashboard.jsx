import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div
      className="dashboard-bg"
      style={{
        backgroundImage: "url(/BatComputerBG.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "calc(100vh)",
        position: "relative",
      }}
    >
      {/* Black overlay */}
      <div className="overlay" style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
      }}></div>

      {/* Page content */}
      <div className="content" style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
        minHeight: "calc(100vh - 80px)",
        color: "white",
        textAlign: "center",
      }}>
        <h1 className="text-4xl font-courierPrime mb-6">Dashboard</h1>
        <p className="text-lg max-w-2xl text-center">
          Welcome to Project Wayne’s Dashboard. Your progress and updates will
          appear here.
        </p>
      </div>
    </div>
  );
}
