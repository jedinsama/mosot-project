"use client"

import GridPattern from "../components/GridPattern"
import ProjectCard from "../components/ProjectCard"
import PageTransition from "../components/PageTransition"
import { motion } from "framer-motion"
import obrasite from "../assets/OBRASITE.png"
import innovision from "../assets/INNOVISON.png"
import scical from "../assets/SCICAL.png"
import pokemon from "../assets/pokemonappsite.png"

function ProjectsPage() {
  return (
    <PageTransition>
      <section className="projects page-section">
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
            Projects
          </motion.h2>
          <div className="projects-grid">
            <ProjectCard
              title="OBRA"
              description="An E-commerce website that sells handicraft 100% made by Filipinos"
              tags={["PHP", "MySQL", "JavaScript"]}
              imageUrl={obrasite || "OBRASITE.png"}
            />
            <ProjectCard
              title="PredictEd By Innovision"
              description="A Grading System with AI Powered Behaviour/Performance Evaluation"
              tags={["PHP", "MySQL", "HTML"]}
              imageUrl={innovision || "INNOVISION.png"}
            />
            <ProjectCard
              title="Pokemon App"
              description="A Pokemon App powered by Vite + React"
              tags={["Vite", "React", "JavaScript",]}
              imageUrl={pokemon || "pokemonappsite.png"}
            />
            <ProjectCard
              title="Functional Scientific Calculator"
              description="A React Powered Calculator site"
              tags={["Vite", "React", "JavaScript",]}
              imageUrl={scical || "SCICAL.png"}
            />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default ProjectsPage
