import { GraduationCap } from "lucide-react"
import profilePic from "./assets/profile.png"

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic || "/placeholder.svg?height=180&width=180"}
      />
      <h2 className="card-title">Mosot, Jaden L.</h2>
      <p className="card-text">
        BSIT 4A
      </p>
      <div className="card-info">
      </div>
    </div>
  )
}

export default Card

