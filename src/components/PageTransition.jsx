"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

// Restore original page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
}

function PageTransition({ children }) {
  // Force cleanup on unmount
  useEffect(() => {
    return () => {
      // Force any pending animations to complete
      document.body.style.pointerEvents = "auto"
    }
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="page-transition-wrapper"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
