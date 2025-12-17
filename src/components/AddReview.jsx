import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaStar } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { emailjsConfig, recipientEmail } from '../config/emailjs'
import { saveReview } from '../utils/storage'
import './AddReview.css'

const AddReview = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    subject: '',
    rating: 5,
    quote: '',
    tags: []
  })
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating })
  }

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      // Save review to localStorage first
      const reviewData = {
        name: formData.name,
        role: formData.role,
        subject: formData.subject,
        rating: formData.rating,
        quote: formData.quote,
        tags: formData.tags
      }
      
      saveReview(reviewData)

      // Prepare email template parameters
      const templateParams = {
        to_email: recipientEmail,
        from_name: formData.name,
        subject: `Neue Bewertung von ${formData.name} - ${formData.subject}`,
        role: formData.role,
        subject_field: formData.subject,
        rating: formData.rating,
        quote: formData.quote,
        tags: formData.tags.join(', ')
      }

      // Send email using EmailJS (optional - if configured)
      if (emailjsConfig.serviceId && emailjsConfig.serviceId !== 'YOUR_SERVICE_ID') {
        try {
          await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.reviewTemplateId,
            templateParams,
            emailjsConfig.publicKey
          )
        } catch (emailError) {
          console.warn('Email sending failed, but review is saved:', emailError)
          // Review is still saved, so we continue
        }
      }

      setSubmitSuccess(true)
      setFormData({
        name: '',
        role: '',
        subject: '',
        rating: 5,
        quote: '',
        tags: []
      })
      
      // Trigger a custom event to refresh testimonials
      window.dispatchEvent(new CustomEvent('reviewAdded'))
      
      // Nach 5 Sekunden die Erfolgsmeldung ausblenden
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error saving review:', error)
      setSubmitError(true)
      
      // Nach 5 Sekunden die Fehlermeldung ausblenden
      setTimeout(() => setSubmitError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableTags = [
    'Schule', 'Abitur', 'Uni', 'Business', 'Eltern-Feedback', 
    'Digital', 'Methode', 'Geduld', 'Verständnis', 'Motivation'
  ]

  return (
    <section id="add-review" className="add-review-section">
      <div className="container">
        <h2 className="section-title">{t.addReview?.title || "Teile deine Erfahrung"}</h2>
        <p className="add-review-subtitle">
          {t.addReview?.subtitle || "Hilf anderen Schülern und Studenten, indem du deine Erfahrung mit Adam teilst"}
        </p>

        {submitSuccess && (
          <div className="success-message">
            <p>{t.addReview?.success || "Vielen Dank für deine Bewertung! Sie wird nach Überprüfung veröffentlicht."}</p>
          </div>
        )}

        {submitError && (
          <div className="error-message">
            <p>{t.addReview?.error || "Es gab einen Fehler beim Senden. Bitte versuche es später erneut."}</p>
          </div>
        )}

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t.addReview?.form?.name || "Name"}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.addReview?.form?.namePlaceholder || "Dein Name"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">{t.addReview?.form?.role || "Rolle"}</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">{t.addReview?.form?.selectRole || "Bitte wählen"}</option>
                <option value="Schüler/in">{t.addReview?.form?.roleStudent || "Schüler/in"}</option>
                <option value="Student/in">{t.addReview?.form?.roleUniversity || "Student/in"}</option>
                <option value="Elternteil">{t.addReview?.form?.roleParent || "Elternteil"}</option>
                <option value="Dualstudent">{t.addReview?.form?.roleDual || "Dualstudent"}</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">{t.addReview?.form?.subject || "Fach"}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t.addReview?.form?.subjectPlaceholder || "z.B. Mathematik, Französisch, Statistik"}
            />
          </div>

          <div className="form-group">
            <label>{t.addReview?.form?.rating || "Bewertung"}</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="star-button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  aria-label={`${star} Sterne`}
                >
                  <FaStar
                    className={`star ${star <= (hoveredStar || formData.rating) ? 'filled' : ''}`}
                  />
                </button>
              ))}
              <span className="rating-text">
                {formData.rating} {t.addReview?.form?.stars || "Sterne"}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quote">{t.addReview?.form?.message || "Deine Bewertung"}</label>
            <textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              required
              rows="6"
              placeholder={t.addReview?.form?.messagePlaceholder || "Teile deine Erfahrung mit Adam..."}
            />
          </div>

          <div className="form-group">
            <label>{t.addReview?.form?.tags || "Tags (optional)"}</label>
            <div className="tags-container">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`tag-button ${formData.tags.includes(tag) ? 'active' : ''}`}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="submit-review-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                {t.addReview?.form?.submitting || "Wird gesendet..."}
              </>
            ) : (
              <>
                <FiSend />
                {t.addReview?.form?.submit || "Bewertung absenden"}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddReview

