"use client"

import { Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-copyright">© {new Date().getFullYear()} THE MOSOT. All rights reserved.</p>
        <div className="footer-social">
          <motion.a
            href="https://github.com/jedinsama" target="_blank"
            className="footer-social-link"
            whileHover={{ scale: 1.2, color: "#ec4899" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jaden-mosot" target="_blank"
            className="footer-social-link"
            whileHover={{ scale: 1.2, color: "#ec4899" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/jaden.mosot/" target="_blank"
            className="footer-social-link"
            whileHover={{ scale: 1.2, color: "#ec4899" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mohshot/" target="_blank"
            className="footer-social-link"
            whileHover={{ scale: 1.2, color: "#ec4899" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Instagram size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
