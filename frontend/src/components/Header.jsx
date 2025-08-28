import React from "react";
import NavItem from "./NavItem";
import LiveDataWidget from "./LiveDataWidget";
import { GiBatMask } from "react-icons/gi"; // Batman-like logo
import "./Header.css";

const headerStyle = {
  position: "relative", //or absolute - keeps header visible while scrolling
  zIndex: 100,
  background: "#001F3F", // deep tech blue
  padding: "10px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #00f0ff", // neon underline
  fontFamily: "'Courier Prime', monospace",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#00f0ff",
  fontWeight: "bold",
  fontSize: "1.4rem",
  cursor: "default",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

export default function Header({ setCurrentPage }) {
  const navItems = [
    { name: "Dashboard" },
    { name: "Blueprint" },
    { name: "Logs", submenu: ["Year 1", "Year 2", "Year 3"] },
    { name: "Achievements", submenu: ["Fitness", "Business", "Knowledge"] },
    { name: "Time Management" },
    { name: "Contact" },
  ];

  return (
   <header className="header">
      {/* Branding */}
      <div style={brandStyle}>
        <GiBatMask
          style={{
            fontSize: "1.8rem",
            color: "#00f0ff",
            filter: "drop-shadow(0 0 8px #00f0ff)",
          }}
        />
        <span>Project Wayne</span>
      </div>

      {/* Navigation */}
      <div className="nav">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            submenu={item.submenu}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </div>

      {/* Live Data */}
      <LiveDataWidget />
    </header>
  );
}
