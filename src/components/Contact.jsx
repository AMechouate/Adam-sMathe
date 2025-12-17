import { useState } from 'react'
import { FiMail, FiMessageCircle, FiCreditCard, FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'school'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert(t.contact.form.success || 'Thank you! I will contact you soon.')
    setFormData({ name: '', email: '', message: '', type: 'school' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <p className="contact-urgency">{t.contact.urgency}</p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.form.name || 'Name'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder || 'Your name'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.form.email || 'Email'}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder || 'your.email@example.com'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">{t.contact.form.type || 'I am interested in'}</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="school">{t.contact.form.typeSchool || 'School Tutoring'}</option>
                  <option value="university">{t.contact.form.typeUniversity || 'University/Business'}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.form.message || 'Message'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t.contact.form.messagePlaceholder || 'Tell me about your needs...'}
                />
              </div>

              <button type="submit" className="submit-button">
                <FiSend />
                {t.contact.form.submit || 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMessageCircle />
              </div>
              <h3>{t.contact.platformsTitle || 'Contact'}</h3>
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
              <h3>{t.contact.paymentTitle || 'Payment'}</h3>
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
              <h3>{t.contact.availabilityTitle || 'Availability'}</h3>
              <p>{t.contact.availability || 'I currently have free spots available!'}</p>
              <p className="availability-note">
                {t.contact.availabilityNote || 'Contact me quickly to secure your spot.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
