import './Hero.css'

const Hero = ({ t }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-split">
          {/* Left side - Content */}
          <div className="hero-content">
            <h1 className="hero-title">Adam's Mathe</h1>
            <div className="hero-slogan">
              <span className="slogan-text">{t.slogan}</span>
            </div>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            
            <div className="hero-cta">
              <a href="#services-school" className="cta-button school">
                {t.hero.cta.school}
              </a>
              <a href="#services-university" className="cta-button university">
                {t.hero.cta.university}
              </a>
            </div>
          </div>

          {/* Right side - Visual blend */}
          <div className="hero-visual">
            <div className="hero-image-adam">
              <img src="/Bilder/Adam.jpg" alt="Adam" />
            </div>
            <div className="hero-image-ipad">
              <div className="ipad-frame">
                <img src="/Bilder/Image1.png" alt="iPad Math Notes" />
              </div>
            </div>
          </div>
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
