"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import emailjs from "@emailjs/browser"

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
    setSubmitStatus(null)

    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "jmosot2002@gmail.com",
      }

      // Send the email using EmailJS
      await emailjs.send(
        "service_e7ztv6k", // You'll need to replace this with your actual service ID
        "template_q2i3wwj", // You'll need to replace this with your actual template ID
        templateParams,
        "DXHQ1zdb64uoWhWVl", // You'll need to replace this with your actual public key
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
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
