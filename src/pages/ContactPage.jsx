"use client"

import {Send, Linkedin } from "lucide-react"
import { Phone } from "lucide-react"
import GridPattern from "../components/GridPattern"
import ContactForm from "../components/ContactForm"
import PageTransition from "../components/PageTransition"
import { motion } from "framer-motion"

function ContactPage() {
  return (
    <PageTransition>
      <section className="contact page-section">
        <div className="grid-pattern-container">
          <GridPattern />
        </div>
        <div className="container contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-text">
              Collaboration? Working Hit me up by filling the form and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <motion.div
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="contact-method-icon">
                  <Send size={24} />
                </div>
                <div className="contact-method-details">
                  <h3>Email</h3>
                  <p>imjadenmosot@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="contact-method-icon">
                  <Linkedin size={24} />
                </div>
                <div className="contact-method-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jaden-mosot</p>
                </div>
              </motion.div>
              <motion.div
                className="phone"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                </motion.div> 
                <motion.div
                className="contact-method"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="contact-method-icon">
                  <phone size={24} />
                </div>
                <div className="contact-method-details">
                  <h3>Contact No.</h3>
                  <p>0935-291-2528</p>
                </div>
              </motion.div>
              <motion.div
                className="phone"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                </motion.div> 
              
              
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default ContactPage
