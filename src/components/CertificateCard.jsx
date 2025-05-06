"use client"

import { Award } from "lucide-react"
import { motion } from "framer-motion"

function CertificateCard({ title, issuer, date, description, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="certificate-content">
        <motion.div
          className="certificate-icon"
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Award size={24} />
        </motion.div>
        <div className="certificate-details">
          <h3 className="certificate-title">{title}</h3>
          <div className="certificate-meta">
            <span className="certificate-issuer">{issuer}</span>
            <span className="text-pink">•</span>
            <span className="certificate-date">{date}</span>
          </div>
          <p className="certificate-description">{description}</p>
        </div>
      </div>
    </motion.a>
  )
}

export default CertificateCard
