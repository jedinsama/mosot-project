"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef(null)

  // Initialize audio on component mount
  useEffect(() => {
    const audio = new Audio("/music/souljimurder.mp3")
    audio.loop = true
    audio.volume = 0.4 // Set initial volume to 40%
    audioRef.current = audio

    // Add event listeners
    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true)
    })

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current.remove()
      }
    }
  }, [])

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("musicPlayerState")
    if (savedState === "playing") {
      setIsPlaying(true)
      if (audioRef.current && isLoaded) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error)
          setIsPlaying(false)
        })
      }
    }
  }, [isLoaded])

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current || !isLoaded) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error)
        setIsPlaying(false)
      })
      localStorage.setItem("musicPlayerState", "playing")
    } else {
      audioRef.current.pause()
      localStorage.setItem("musicPlayerState", "paused")
    }
  }, [isPlaying, isLoaded])

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <motion.button
      className="music-player-button"
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={isPlaying ? "Mute music" : "Unmute music"}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  )
}

export default MusicPlayer
