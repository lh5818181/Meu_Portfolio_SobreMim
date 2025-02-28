import React, { useState, useEffect } from "react";
import "./themeToggle.css";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label={darkMode ? "Mudar para o modo claro" : "Mudar para o modo escuro"}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
