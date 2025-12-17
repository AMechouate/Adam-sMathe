import { FiMail, FiMessageCircle, FiCreditCard } from 'react-icons/fi'
import './Contact.css'

const Contact = ({ t }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
        <p className="contact-urgency">{t.contact.urgency}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMessageCircle />
              </div>
              <h3>Kontakt</h3>
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
              <h3>Bezahlung</h3>
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
              <h3>Verfügbarkeit</h3>
              <p>Aktuell habe ich noch freie Plätze verfügbar!</p>
              <p className="availability-note">
                Melde dich schnell, um deinen Platz zu sichern.
              </p>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h3>Bereit für deine Mathe-Erfolgsgeschichte?</h3>
              <p>Kontaktiere mich noch heute und starte deine erfolgreiche Prüfungsvorbereitung!</p>
              <div className="cta-buttons">
                <a 
                  href="https://www.superprof.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  Auf Superprof kontaktieren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

