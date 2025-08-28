import React from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Blueprint from "./pages/Blueprint";
import Logs from "./pages/Logs";
import Year1Logs from "./pages/Year1Logs";
import Achievements from "./pages/Achievements";
import TimeManagement from "./pages/TimeManagement";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Blueprint":
        return <Blueprint />;
      case "Logs":
        return <Logs />;
      case "Year 1":
        return <Year1Logs />
      case "Achievements":
        return <Achievements />;
      case "Time Management":
        return <TimeManagement />;
      case "Contact":
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
