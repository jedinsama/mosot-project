"use client"

import { useEffect, useRef, useState } from "react"

function GridPattern() {
  const canvasRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef()
  const pointsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    const spacing = 50 // Grid spacing
    const maxDistortion = 15 // Maximum distortion amount
    const distortionRadius = 200 // How far the distortion effect reaches

    // Initialize grid points
    const initializeGrid = () => {
      cols = Math.floor(width / spacing) + 2
      rows = Math.floor(height / spacing) + 2

      // Create grid points with original and current positions
      const points = []
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const originalX = x * spacing
          const originalY = y * spacing
          points.push({
            originalX,
            originalY,
            x: originalX,
            y: originalY,
          })
        }
      }
      pointsRef.current = points
    }

    const resizeCanvas = () => {
      const { width: newWidth, height: newHeight } = canvas.getBoundingClientRect()
      width = newWidth
      height = newHeight

      // Set canvas dimensions with device pixel ratio for sharp rendering
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr

      // Scale context according to device pixel ratio
      ctx.scale(dpr, dpr)

      // Set canvas CSS dimensions
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      // Initialize grid after resize
      initializeGrid()
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        })
      }
    }

    // Update grid points based on mouse position
    const updatePoints = () => {
      const { x: mouseX, y: mouseY } = mousePosition

      pointsRef.current.forEach((point) => {
        // Calculate distance from point to mouse
        const dx = mouseX - point.originalX
        const dy = mouseY - point.originalY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply distortion based on distance (water-like effect)
        if (distance < distortionRadius) {
          // Normalize distance (0-1 range)
          const normalized = 1 - distance / distortionRadius
          // Apply quadratic easing for more natural movement
          const easing = normalized * normalized
          // Calculate distortion amount
          const distortionAmount = maxDistortion * easing

          // Apply distortion in the direction away from mouse
          const angle = Math.atan2(dy, dx)
          point.x = point.originalX - Math.cos(angle) * distortionAmount
          point.y = point.originalY - Math.sin(angle) * distortionAmount
        } else {
          // Reset to original position if outside influence radius
          point.x = point.originalX
          point.y = point.originalY
        }
      })
    }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update points based on mouse position
      updatePoints()

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 1

      // Draw horizontal lines
      for (let y = 0; y < rows; y++) {
        ctx.beginPath()
        for (let x = 0; x < cols; x++) {
          const index = y * cols + x
          const point = pointsRef.current[index]

          if (x === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < cols; x++) {
        ctx.beginPath()
        for (let y = 0; y < rows; y++) {
          const index = y * cols + x
          const point = pointsRef.current[index]

          if (y === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(drawGrid)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Set initial position to center
    setMousePosition({ x: width / 2, y: height / 2 })

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(drawGrid)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
      }}
    />
  )
}

export default GridPattern
