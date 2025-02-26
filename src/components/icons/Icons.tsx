import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./icons.css";

const socialLinks = [
  { name: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/5581999429143" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/devriqueoliver/" },
  { name: "Email", icon: FaEnvelope, link: "mailto:lh5818181@gmail.com" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/luis-henrique-76245231a/" },
  { name: "GitHub", icon: FaGithub, link: "https://github.com/lh5818181" },
];

const SocialIcons: React.FC = () => {
  return (
    <motion.div
      className="icons-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {socialLinks.map(({ name, icon: Icon, link }) => (
        <motion.a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          whileHover={{ scale: 1.2 }}
        >
          <Icon size={30} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
