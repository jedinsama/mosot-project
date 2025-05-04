"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import GridPattern from "../components/GridPattern"
import BlogCard from "../components/BlogCard"
import BlogPostDetail from "../components/BlogPostDetail.jsx"
import PageTransition from "../components/PageTransition"
import { blogPostsData } from "../data/blogData"

function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  const openPost = (post) => {
    setSelectedPost(post)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closePost = () => {
    setSelectedPost(null)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <PageTransition>
      <section className="blog page-section">
        <div className="grid-pattern-container">
          <GridPattern />
        </div>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TRAVEL BLOG - INDUSTRY VISIT
          </motion.h2>
          <motion.p
            className="blog-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <b>
              <h1>"LAAGAN MAN KAAYO KA 'NAK!"</h1>
            </b>{" "}
            <br></br> - Leah Fe Mosot. Jaden's Mother
          </motion.p>

          <div className="blog-grid">
            {blogPostsData.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                url={post.url}
                onClick={() => openPost(post)}
              />
            ))}
          </div>
        </div>

        {selectedPost && <BlogPostDetail post={selectedPost} onClose={closePost} />}
      </section>
    </PageTransition>
  )
}

export default BlogPage
