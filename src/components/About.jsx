import './About.css'

const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/Bilder/Adam2.jpeg" alt={t.about.name} />
          </div>
          
          <div className="about-text">
            <div className="about-header">
              <h3>{t.about.name}</h3>
              <p className="age">{t.about.age}</p>
            </div>
            
            <div className="education">
              <p><strong>{t.about.education}</strong></p>
            </div>
            
            <p className="experience">{t.about.experience}</p>
            
            <p className="description">{t.about.description}</p>
            
            <div className="stats">
              <div className="stat-card">
                <div className="stat-number">{t.about.stats.students.split(' ')[0]}</div>
                <div className="stat-label">{t.about.stats.students.split(' ').slice(1).join(' ')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{t.about.stats.years}</div>
                <div className="stat-label">{t.about.stats.success}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="online-process">
          <h3>{t.about.online}</h3>
          <div className="process-steps">
            {t.about.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-info">
          <p>{t.about.payment}</p>
          <p className="global">{t.about.global}</p>
        </div>
      </div>
    </section>
  )
}

export default About

