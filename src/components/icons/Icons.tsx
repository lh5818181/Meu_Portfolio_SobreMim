import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./icons.css";

const icons = [
  { Icon: FaWhatsapp, link: "https://wa.me/5581999429143" },
  { Icon: FaInstagram, link: "https://www.instagram.com/devriqueoliver/" },
  { Icon: FaEnvelope, link: "mailto:lh5818181@gmail.com" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/luis-henrique-76245231a/" },
  { Icon: FaGithub, link: "https://github.com/lh5818181" }
];

const SocialIcons: React.FC = () => {
  return (
    <motion.div
      className="icons"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.2 }}
    >
      {icons.map(({ Icon, link }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          whileHover={{ scale: 1.2 }}
          aria-label={`Link para ${link}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Icon size={30} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
