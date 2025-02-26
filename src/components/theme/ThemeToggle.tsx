import React, { useState } from "react";
import "./themeToggle.css";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
