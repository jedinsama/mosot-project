"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

function BlogCard({ title, date, excerpt, imageUrl, url, onClick }) {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
    >
      <div className="blog-image-link">
        <div className="blog-image">
          <img src={imageUrl || "https://placehold.co/800x450"} alt={title} />
          <div className="blog-image-overlay"></div>
        </div>
      </div>
      <div className="blog-content">
        <span className="blog-date">{date}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <motion.button
          className="blog-link"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Read More <ArrowUpRight size={18} className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default BlogCard
