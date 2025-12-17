import './Hero.css'

const Hero = ({ t }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-slogan">
            <span className="slogan-text">{t.slogan}</span>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">
              {t.nav.contact}
            </a>
            <a href="#about" className="cta-button secondary">
              {t.nav.about}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Bilder/Adam.jpg" alt="Adam" />
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 600,0 900,60 C1050,90 1150,60 1200,30 L1200,120 L0,120 Z" fill="var(--bg-secondary)"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero

