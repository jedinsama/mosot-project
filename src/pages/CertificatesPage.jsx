"use client"

import CertificateCard from "../components/CertificateCard"
import PageTransition from "../components/PageTransition"
import { motion } from "framer-motion"

function CertificatesPage() {
  return (
    <PageTransition>
      <section className="certificates page-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certificates
          </motion.h2>
          <div className="certificates-grid">
            <CertificateCard
              title="Microsoft Copilot Studio"
              issuer="Simplilearn"
              date="2025"
              description="Learned to build and customize AI-powered copilots using Microsoft’s low-code tools."
            />
            <CertificateCard
              title="Generative AI For Beginners"
              issuer="Simplilearn"
              date="2025"
              description="Gained foundational knowledge of generative AI concepts and tools."
            />
            <CertificateCard
              title="Introduction to Cloud Security"
              issuer="Simplilearn"
              date="2025"
              description="Covered basic cloud security principles, threats, and best practices."
            />
            <CertificateCard
              title="AI ML Projects"
              issuer="Simplilearn"
              date="2025"
              description="Applied machine learning and AI concepts through hands-on projects."
            />
                        <CertificateCard
              title="Introduction to Supervised and Unsupervised Machine Learning"
              issuer="Simplilearn"
              date="2025"
              description="Explored core ML techniques, including classification, regression, and clustering."
            />
                        <CertificateCard
              title="GitHub Copilot Fundamentals"
              issuer="Simplilearn"
              date="2025"
              description="Learned to use GitHub Copilot for code suggestions and development efficiency."
            />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default CertificatesPage
