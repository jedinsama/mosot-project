"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

function ProjectCard({ title, description, tags, imageUrl }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img src={imageUrl || "https://placehold.co/800x600"} alt={title} />
        <div className="project-image-overlay"></div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="project-tag"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.a
          href="#"
          className="project-link"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
