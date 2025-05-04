"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

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

  // Handle navigation
  const handleNavigation = (path, e) => {
    e.preventDefault() // Prevent default link behavior
    e.stopPropagation() // Stop event propagation

    setIsOpen(false) // Close mobile menu

    // Only navigate if we're not already on this path
    if (location.pathname !== path) {
      // Use setTimeout to ensure any cleanup happens before navigation
      setTimeout(() => {
        navigate(path)
      }, 0)
    }
  }

  // Check if a path is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname === path
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={(e) => handleNavigation("/", e)}>
          <span className="text-white">THE </span>
          <span className="text-pink">MOSOT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <a
            href="/"
            className={isActive("/") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/", e)}
          >
            Home
          </a>
          <a
            href="/about"
            className={isActive("/about") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/about", e)}
          >
            About
          </a>
          <a
            href="/skills"
            className={isActive("/skills") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/skills", e)}
          >
            Skills
          </a>
          <a
            href="/projects"
            className={isActive("/projects") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/projects", e)}
          >
            Projects
          </a>
          <a
            href="/certificates"
            className={isActive("/certificates") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/certificates", e)}
          >
            Certificates
          </a>
          <a
            href="/blog"
            className={isActive("/blog") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/blog", e)}
          >
            Blog
          </a>
          <a
            href="/contact"
            className={isActive("/contact") ? "navbar-nav-item active-nav-item" : "navbar-nav-item"}
            onClick={(e) => handleNavigation("/contact", e)}
          >
            Contact
          </a>
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
        <a href="/" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/", e)}>
          Home
        </a>
        <a href="/about" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/about", e)}>
          About
        </a>
        <a href="/skills" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/skills", e)}>
          Skills
        </a>
        <a href="/projects" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/projects", e)}>
          Projects
        </a>
        <a
          href="/certificates"
          className="navbar-mobile-nav-item"
          onClick={(e) => handleNavigation("/certificates", e)}
        >
          Certificates
        </a>
        <a href="/blog" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/blog", e)}>
          Blog
        </a>
        <a href="/contact" className="navbar-mobile-nav-item" onClick={(e) => handleNavigation("/contact", e)}>
          Contact
        </a>
      </div>
    </header>
  )
}

export default Navbar
