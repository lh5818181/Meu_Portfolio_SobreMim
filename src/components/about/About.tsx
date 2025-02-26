import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const About: React.FC = () => {
  return (
    <motion.section
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Sobre Mim</h2>
      <p>
      Sou um desenvolvedor em formação, entusiasta de tecnologias web e apaixonado por criar soluções 
      funcionais e escaláveis. Meu foco é desenvolver aplicações modernas, garantindo qualidade, usabilidade e eficiência. Tenho um olhar atento à organização do código, boas práticas e aprendizado contínuo para evoluir constantemente.
      </p>
      <p>
        Busco sempre aprimorar minhas habilidades, trazendo soluções inovadoras e escaláveis para a web.
      </p>
    </motion.section>
  );
};

export default About;
