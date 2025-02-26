import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/SkillsData";
import "./skills.css";

const Skills: React.FC = () => {
  return (
    <motion.section
      className="skills-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.skills.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
