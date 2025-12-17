import './AdamMethod.css'

const AdamMethod = ({ t }) => {
  return (
    <section id="method" className="adam-method">
      <div className="container">
        <div className="method-content">
          <div className="method-text">
            <h2 className="section-title">{t.method.title}</h2>
            <p className="method-subtitle">{t.method.subtitle}</p>
            <p className="method-description">{t.method.description}</p>
            
            <ul className="method-features">
              {t.method.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✨</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="method-visual">
            <div className="ipad-showcase">
              <div className="ipad-frame-large">
                <img src="/Bilder/Image2.png" alt="iPad Math Notes" />
              </div>
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdamMethod

