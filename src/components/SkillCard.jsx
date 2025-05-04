"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function SkillCard({ title, percentage }) {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      // Start the animation when the component is in view
      const timer = setTimeout(() => {
        setProgress(percentage)
        controls.start({ width: `${percentage}%` })
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [inView, percentage, controls])

  return (
    <motion.div
      className="skill-card"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="skill-title">{title}</h3>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
      <div className="skill-labels">
        <span className="skill-level">Skill Level</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
    </motion.div>
  )
}

export default SkillCard
