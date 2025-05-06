"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import ProjectsPage from "./pages/ProjectsPage"
import CertificatesPage from "./pages/CertificatesPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import MusicPlayer from "./components/MusicPlayer"
import "./styles/main.css"

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <MusicPlayer />
    </main>
  )
}

export default App
