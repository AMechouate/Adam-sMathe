import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiMessageCircle, FiCreditCard, FiSend } from 'react-icons/fi'
import { emailjsConfig, recipientEmail } from '../config/emailjs'
import './Contact.css'

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'school'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: recipientEmail,
        from_name: formData.name,
        from_email: formData.email,
        subject: `Neue Kontaktanfrage von ${formData.name} - ${formData.type === 'school' ? 'Schule' : 'Universität/Business'}`,
        message: formData.message,
        type: formData.type === 'school' ? 'Schule' : 'Universität/Business',
        reply_to: formData.email
      }

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.contactTemplateId,
        templateParams,
        emailjsConfig.publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', type: 'school' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <p className="contact-urgency">{t.contact.urgency}</p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            {submitStatus === 'success' && (
              <div className="form-success-message">
                {t.contact.form?.success || 'Vielen Dank! Ich werde mich bald bei dir melden.'}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-error-message">
                {t.contact.form?.error || 'Es gab einen Fehler beim Senden. Bitte versuche es später erneut oder kontaktiere mich direkt per E-Mail.'}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">{t.contact.form.type}</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="school">{t.contact.form.typeSchool}</option>
                  <option value="university">{t.contact.form.typeUniversity}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {t.contact.form?.submitting || 'Wird gesendet...'}
                  </>
                ) : (
                  <>
                    <FiSend />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMessageCircle />
              </div>
              <h3>{t.contact.platformsTitle}</h3>
              <p>{t.contact.platforms}</p>
              <div className="platforms">
                <span className="platform-badge">Skype</span>
                <span className="platform-badge">Microsoft Teams</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiCreditCard />
              </div>
              <h3>{t.contact.paymentTitle}</h3>
              <p>{t.contact.payment}</p>
              <div className="platforms">
                <span className="platform-badge">Überweisung</span>
                <span className="platform-badge">PayPal</span>
              </div>
            </div>

            <div className="info-card highlight">
              <div className="info-icon">
                <FiMail />
              </div>
              <h3>{t.contact.availabilityTitle}</h3>
              <p>{t.contact.availability}</p>
              <p className="availability-note">
                {t.contact.availabilityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
