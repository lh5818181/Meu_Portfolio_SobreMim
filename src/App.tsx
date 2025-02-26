import React from "react";
import Layout from "./components/layout/Layout"
import ThemeToggle from "./components/theme/ThemeToggle";

const App: React.FC = () => {
  return (
    <>
      <ThemeToggle />
      <Layout />
    </>
  );
};

export default App;
