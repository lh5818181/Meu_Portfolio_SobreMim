import React from "react";
import About from "../about/About";
import Skills from "../skills/Skills";
import SocialIcons from "../icons/Icons";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <About />
      <Skills />
      <SocialIcons />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Luís Henrique - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
