"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" end>
          <span className="text-white">THE   </span>
          <span className="text-pink">MOSOT</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/certificates"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            Certificates
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "navbar-nav-item active-nav-item" : "navbar-nav-item")}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar-mobile-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/about" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/skills" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          Skills
        </NavLink>
        <NavLink to="/projects" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          Projects
        </NavLink>
        <NavLink to="/certificates" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          Certificates
        </NavLink>
        <NavLink to="/blog" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          Blog
        </NavLink>
        <NavLink to="/contact" className="navbar-mobile-nav-item" onClick={handleLinkClick}>
          Contact
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
