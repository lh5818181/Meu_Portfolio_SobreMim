import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../icons/icons.css";

const icons = [
  { Icon: FaWhatsapp, link: "https://wa.me/5581999429143" },
  { Icon: FaInstagram, link: "https://www.instagram.com/devriqueoliver/" },
  { Icon: FaEnvelope, link: "mailto:lh5818181@gmail.com" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/luis-henrique-76245231a/" },
  { Icon: FaGithub, link: "https://github.com/lh5818181" }
];

const SocialIcons: React.FC = () => {
  return (
    <motion.div className="icons">
      {icons.map(({ Icon, link }, index) => (
        <motion.a
          key={index}
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
