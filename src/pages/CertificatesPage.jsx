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
              title="Data Analyisis with Python"
              issuer="freecodecamp"
              date="2025"
              description="Learned how to analyze and visualize data using Python libraries like Pandas and NumPy,"
              url="https://www.freecodecamp.org/certification/jadenmosot/data-analysis-with-python-v7"
            />
            <CertificateCard
              title="Microsoft Copilot Studio"
              issuer="Simplilearn"
              date="2025"
              description="Learned to build and customize AI-powered copilots using Microsoft's low-code tools."
              url="https://certificates.simplicdn.net/share/8195573_85560111744736114793.pdf"
            />
            <CertificateCard
              title="Getting Started with Machine Learning Algorithms"
              issuer="Simplilearn"
              date="2025"
              description="Learned the fundamentals of machine learning, including key algorithms like linear regression and clustering."
              url="https://certificates.simplicdn.net/share/8226928_85560111746631650765.pdf"
            />
            <CertificateCard
              title="Introduction to CISSP Security Assessment & Testing and Security Operations"
              issuer="Simplilearn"
              date="2025"
              description="Learned the core principles of security assessment, testing, and operations, including risk management, security controls evaluation, and incident response processes."
              url="https://certificates.simplicdn.net/share/8220179_85560111746677117172.pdf"
            />
            <CertificateCard
              title="Tensorflow for Beginners"
              issuer="Simplilearn"
              date="2025"
              description="Learned the basics of building and training machine learning models using TensorFlow, including creating neural networks and working with tensors."
              url="https://certificates.simplicdn.net/share/8221884_85560111746677216913.pdf"
            />
            <CertificateCard
              title="Generative AI For Beginners"
              issuer="Simplilearn"
              date="2025"
              description="Gained foundational knowledge of generative AI concepts and tools."
              url="https://certificates.simplicdn.net/share/8207145_85560111744957384874.pdf"
            />
            <CertificateCard
              title="Introduction to Cloud Security"
              issuer="Simplilearn"
              date="2025"
              description="Covered basic cloud security principles, threats, and best practices."
              url="https://certificates.simplicdn.net/share/8216676_85560111745137136156.pdf"
            />
            <CertificateCard
              title="AI ML Projects"
              issuer="Simplilearn"
              date="2025"
              description="Applied machine learning and AI concepts through hands-on projects."
              url="http://certificates.simplicdn.net/share/8253797_85560111746513538127.pdf"
            />
            <CertificateCard
              title="Introduction to Supervised and Unsupervised Machine Learning"
              issuer="Simplilearn"
              date="2025"
              description="Explored core ML techniques, including classification, regression, and clustering."
              url="https://certificates.simplicdn.net/share/8247242_85560111746513628568.pdf"
            />
            <CertificateCard
              title="GitHub Copilot Fundamentals"
              issuer="Simplilearn"
              date="2025"
              description="Learned to use GitHub Copilot for code suggestions and development efficiency."
              url="https://certificates.simplicdn.net/share/8201514_85560111744864739430.pdf"
            />
            <CertificateCard
              title="Introduction to Machine Learning with R"
              issuer="Simplilearn"
              date="2025"
              description="Learned to apply basic ML algorithms using R for data analysis, modeling, and prediction."
              url="https://certificates.simplicdn.net/share/8236316_85560111746513899487.pdf"
            />            
            <CertificateCard
              title="Machine Learning with Python"
              issuer="freecodecamp"
              date="2025"
              description="Learned how to build and evaluate machine learning models using Python libraries covering both supervised and unsupervised learning techniques."
              url="https://www.freecodecamp.org/certification/jadenmosot/machine-learning-with-python-v7"
            />           
            <CertificateCard
            title="PMP Basics"
            issuer="Simplilearn"
            date="2025"
            description="Learned the fundamentals of project management, including the five process groups, key knowledge areas, project life cycle, and essential tools and techniques aligned with PMBOK® guidelines."
            url="https://certificates.simplicdn.net/share/8262067_85560111746514069446.pdf"
             />            
            <CertificateCard
          title="Python Libraries for Data Science"
          issuer="Simplilearn"
          date="2025"
          description="Learned to use key libraries like NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis, visualization, and machine learning."
          url="https://certificates.simplicdn.net/share/8303125_85560111746514229642.pdf"
        />           
             <CertificateCard
        title="Deep Learning for Beginners"
        issuer="Simplilearn"
        date="2025"
        description="Learned the basics of neural networks, activation functions, and how to build simple models using frameworks like TensorFlow or Keras."
        url="https://certificates.simplicdn.net/share/8296324_85560111746514475546.pdf"
      />
             <CertificateCard
        title="Python for Beginners"
        issuer="Simplilearn"
        date="2025"
        description="Learned the fundamentals and functionality of Python."
        url="https://certificates.simplicdn.net/share/8299184_85560111746514349681.pdf"
      />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default CertificatesPage
