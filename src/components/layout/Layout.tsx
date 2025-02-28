import React from "react";
import { motion } from "framer-motion";
import About from "../about/About";
import Skills from "../skills/Skills";
import SocialIcons from "../icons/Icons";
import "./layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <About />
      <Skills />
      <SocialIcons />
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>© {new Date().getFullYear()} Luís Henrique - Todos os direitos reservados</p>
      </motion.footer>
    </div>
  );
};

export default Layout;
