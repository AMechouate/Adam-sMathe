import { FiBook, FiGlobe, FiAward, FiMonitor, FiUsers, FiBriefcase } from 'react-icons/fi'
import './Services.css'

const Services = ({ t }) => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        
        {/* School Section */}
        <div id="services-school" className="service-section school-section">
          <div className="section-header">
            <div className="section-icon school-icon">
              <FiBook />
            </div>
            <div>
              <h3 className="section-heading">{t.services.school.title}</h3>
              <p className="section-focus">{t.services.school.focus}</p>
            </div>
          </div>
          
          <div className="section-content">
            <div className="section-visual">
              <div className="visual-frame school-frame">
                <img src="/Bilder/Image3.png" alt="School Math Notes" />
              </div>
            </div>
            
            <div className="section-details">
              <p className="section-description">{t.services.school.description}</p>
              <ul className="service-list">
                {t.services.school.levels.map((level, index) => (
                  <li key={index}>{level}</li>
                ))}
              </ul>
              
              {t.services.international && (
                <div className="international-note">
                  <FiGlobe className="note-icon" />
                  <div>
                    <strong>{t.services.international.title}</strong>
                    <ul>
                      {t.services.international.locations.map((location, index) => (
                        <li key={index}>{location}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* University & Business Section */}
        <div id="services-university" className="service-section university-section">
          <div className="section-header">
            <div className="section-icon university-icon">
              <FiBriefcase />
            </div>
            <div>
              <h3 className="section-heading">{t.services.university.title}</h3>
              <p className="section-focus">{t.services.university.focus}</p>
            </div>
          </div>
          
          <div className="section-content">
            <div className="section-visual">
              <div className="visual-frame university-frame">
                <img src="/Bilder/Image4.png" alt="University Math Notes" />
              </div>
            </div>
            
            <div className="section-details">
              <p className="section-description">{t.services.university.description}</p>
              <ul className="service-list">
                {t.services.university.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Formats Section */}
        <div className="formats-section">
          <div className="formats-header">
            <FiMonitor className="formats-icon" />
            <h3>{t.services.online.title}</h3>
          </div>
          <p className="formats-description">{t.services.online.description}</p>
          <div className="formats-grid">
            {t.services.online.features.map((feature, index) => (
              <div key={index} className="format-card">
                <span className="format-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
