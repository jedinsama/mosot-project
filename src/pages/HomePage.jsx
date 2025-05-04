"use client"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import GridPattern from "../components/GridPattern"
import PageTransition from "../components/PageTransition"

function HomePage() {
  // Array of different titles to cycle through
  const titles = ["UI/UX DESIGNER", "WEB DEVELOPER", "FRONTEND DESIGNER"]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Effect to cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        setIsAnimating(false)
      }, 500) // Wait for exit animation to complete
    }, 3000) // Change title every 3 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  // Handle navigation with custom handler
  const handleNavigation = (e, path) => {
    e.preventDefault()
    // Use the history API directly for navigation
    window.history.pushState({}, "", path)
    // Dispatch a navigation event
    window.dispatchEvent(new PopStateEvent("popstate"))
  }

  return (
    <PageTransition>
      <section className="hero">
        <div className="grid-pattern-container">
          <GridPattern />
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.h1
              className="hero-title static-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I AM A
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTitleIndex}
                className="hero-title dynamic-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-pink">{titles[currentTitleIndex]}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="/contact" className="btn btn-primary" onClick={(e) => handleNavigation(e, "/contact")}>
              Get in touch <ArrowRight size={18} />
            </a>
            <a href="/projects" className="btn btn-outline" onClick={(e) => handleNavigation(e, "/projects")}>
              View projects
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default HomePage
