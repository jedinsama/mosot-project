"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

function BlogPostDetail({ post, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1))
  }

  // Format the content with paragraphs
  const paragraphs = post.content.split("\n").filter((p) => p.trim() !== "")

  return (
    <AnimatePresence>
      <motion.div
        className="blog-post-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="blog-post-detail"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="blog-post-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <h2 className="blog-post-detail-title">{post.title}</h2>
          <p className="blog-post-detail-date">{post.date}</p>

          <div className="blog-post-slideshow">
            <div className="blog-post-image-container">
              <img
                src={post.images[currentImageIndex].url || "/placeholder.svg"}
                alt={post.images[currentImageIndex].alt}
                className="blog-post-image"
              />

              <button className="slideshow-nav-btn slideshow-prev-btn" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>

              <button className="slideshow-nav-btn slideshow-next-btn" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>

              <div className="slideshow-indicators">
                {post.images.map((_, index) => (
                  <button
                    key={index}
                    className={`slideshow-indicator ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="blog-post-detail-content">
            <h3 className="blog-post-detail-subtitle">Day {post.id} Highlights</h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="blog-post-detail-text">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BlogPostDetail
