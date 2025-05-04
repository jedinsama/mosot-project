"use client"

import { useState } from "react"
import { Send } from "lucide-react"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        ></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="form-submit">
        {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
      </button>

      {submitStatus === "success" && (
        <div className="form-success">Your message has been sent successfully. I'll get back to you soon!</div>
      )}

      {submitStatus === "error" && (
        <div className="form-error">There was an error sending your message. Please try again later.</div>
      )}
    </form>
  )
}

export default ContactForm
