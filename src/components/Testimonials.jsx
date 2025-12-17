import TestimonialCarousel from './testimonials/TestimonialCarousel'
import './Testimonials.css'

const Testimonials = ({ t, filterTags = [] }) => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">{t.testimonials?.title || "Was meine Schüler sagen"}</h2>
        {t.testimonials?.subtitle && (
          <p className="testimonials-subtitle">{t.testimonials.subtitle}</p>
        )}
        <TestimonialCarousel filterTags={filterTags} t={t} />
      </div>
    </section>
  )
}

export default Testimonials

