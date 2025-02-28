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
      <img 
        className="about-img" 
        src="https://github.com/lh5818181.png" 
        alt="Foto de Perfil de Luis Henrique Vieira de Oliveira"
      />

      <div className="about-text">
        <h2 className="section-title">Sobre Mim</h2>
        <p>
          Sou um desenvolvedor em formação, entusiasta de tecnologias web e apaixonado por criar soluções funcionais e escaláveis. 
          Meu foco é desenvolver aplicações modernas, garantindo qualidade, usabilidade e eficiência. Tenho um olhar atento à organização do código, boas práticas e aprendizado contínuo para evoluir constantemente.
        </p>
        <p>
          Além do desenvolvimento, também me interesso por <strong>UI/UX Design</strong>, 
          buscando sempre interfaces intuitivas e agradáveis. Meu foco é transformar ideias em 
          soluções funcionais e eficientes.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
