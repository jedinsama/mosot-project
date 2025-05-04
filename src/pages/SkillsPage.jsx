"use client"

import { motion } from "framer-motion"
import GridPattern from "../components/GridPattern"
import SkillCard from "../components/SkillCard"
import PageTransition from "../components/PageTransition"

function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <PageTransition>
      <section className="skills page-section">
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
            Skills & Expertise
          </motion.h2>
          <div className="skills-grid">
            <SkillCard title="Frontend Development" percentage={90} />
            <SkillCard title="UI/UX Design" percentage={85} />
            <SkillCard title="Backend Development" percentage={75} />
            <SkillCard title="Mobile Development" percentage={70} />
            <SkillCard title="3D Modeling" percentage={65} />
            <SkillCard title="Motion Graphics" percentage={80} />
          </div>

          <motion.h2
            className="section-title mt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Things I Specialize In
          </motion.h2>
          <motion.div className="specialization-grid" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">Creative Coding</h3>
              <p className="specialization-text">
                Combining art and technology to create interactive and visually stunning digital experiences.
              </p>
            </motion.div>
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">Responsive Design</h3>
              <p className="specialization-text">
                Creating websites that provide optimal viewing experience across a wide range of devices.
              </p>
            </motion.div>
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">User Experience</h3>
              <p className="specialization-text">
                Designing intuitive interfaces that enhance user satisfaction and engagement.
              </p>
            </motion.div>
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">Performance Optimization</h3>
              <p className="specialization-text">
                Improving load times and overall performance for a smoother user experience.
              </p>
            </motion.div>
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">Backend Development</h3>
              <p className="specialization-text">
                Giving functionalities to websites, apps and many more.
              </p>
            </motion.div>
            <motion.div
              className="specialization-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="specialization-title">Accessibility</h3>
              <p className="specialization-text">
                Ensuring digital products are usable by people with a wide range of abilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default SkillsPage
