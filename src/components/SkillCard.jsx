"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function SkillCard({ title, percentage }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="skill-title">{title}</h3>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
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
