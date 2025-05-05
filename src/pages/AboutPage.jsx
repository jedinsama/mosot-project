"use client"
import { Download, Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import profileImage from "../assets/profile.png"

function AboutPage() {
  return (
    <PageTransition>
      <section className="about page-section">
        <div className="container about-container">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-border"></div>
              <div className="about-image-gradient"></div>
              <div className="about-image">
                <img src={profileImage || "profile.png"} alt="Your profile picture" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Buenas! My name is Jaden Mosot. I'm a creative developer with a passion for Web Development and Backend
              Development. My approach combines technical expertise with artistic vision to functional designs.
            </p>
            <p className="about-text">
              With a background in both design and development, I bring a logical perspective to every project, ensuring
              both aesthetics and functionality are prioritized.
            </p>
            <div className="about-actions">
              <motion.a
                href="/CVMosot.png"
                download="custom_filename.png"
                className="btn btn-primary about-cv-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} /> <span>Download CV</span>
              </motion.a>
              <div className="social-links">
                <motion.a
                  href="https://github.com/jedinsama"
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--color-pink)", color: "var(--color-black)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  rel="noreferrer"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jaden-mosot"
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--color-pink)", color: "var(--color-black)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  rel="noreferrer"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/jaden.mosot/"
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--color-pink)", color: "var(--color-black)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  rel="noreferrer"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/mohshot/"
                  target="_blank"
                  className="social-link"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--color-pink)", color: "var(--color-black)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  rel="noreferrer"
                >
                  <Instagram size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default AboutPage
