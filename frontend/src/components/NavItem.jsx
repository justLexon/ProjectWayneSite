import React, { useState } from "react";

export default function NavItem({ name, submenu, setCurrentPage }) {
  const [open, setOpen] = useState(false);
  const [hoveredSub, setHoveredSub] = useState(null); // track hovered submenu

  return (
    <div
      style={{
        zIndex: 100,
        position: "relative",
        cursor: "pointer",
        color: "#00f0ff",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main navigation item */}
      <div
        style={{
          fontWeight: "bold",
          padding: "5px 10px",
          borderBottom: "2px solid transparent",
          transition: "all 0.3s",
        }}
        onClick={() => setCurrentPage(name)}
      >
        {name}
      </div>

      {/* Submenu dropdown */}
      {submenu && open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#001F3F", // tech blue
            padding: "10px",
            border: "1px solid #00f0ff",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            zIndex: 10,
          }}
        >
          {submenu.map((sub) => (
            <div
              key={sub}
              style={{
                color: "#00f0ff",
                padding: "5px 10px",
                borderRadius: "4px",
                transition: "0.2s",
                fontFamily: "'Courier Prime', monospace",
                backgroundColor:
                  hoveredSub === sub ? "rgba(0, 255, 255, 0.2)" : "transparent",
                boxShadow:
                  hoveredSub === sub ? "0 0 8px rgba(0,255,255,0.7)" : "none",
              }}
              onMouseEnter={() => setHoveredSub(sub)}
              onMouseLeave={() => setHoveredSub(null)}
              onClick={() => setCurrentPage(sub)} // navigate to submenu page
            >
              {sub}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
