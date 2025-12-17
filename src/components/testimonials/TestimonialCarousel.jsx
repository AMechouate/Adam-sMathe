import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import testimonialsData from '../../data/testimonials.json'
import { getReviews } from '../../utils/storage'
import './TestimonialCarousel.css'

const TestimonialCarousel = ({ filterTags = [], autoPlayInterval = 5000, t }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [expandedQuotes, setExpandedQuotes] = useState({})
  const [allTestimonials, setAllTestimonials] = useState([])

  // Load saved reviews from localStorage and combine with static testimonials
  const loadTestimonials = () => {
    const savedReviews = getReviews()
    // Convert saved reviews to testimonial format
    const convertedReviews = savedReviews.map(review => ({
      id: review.id,
      name: review.name,
      role: review.role,
      subject: review.subject,
      quote: review.quote,
      rating: review.rating,
      tags: review.tags || []
    }))
    
    // Combine static testimonials with saved reviews (saved reviews first)
    const combined = [...convertedReviews, ...testimonialsData]
    setAllTestimonials(combined)
  }

  useEffect(() => {
    loadTestimonials()
    
    // Listen for new reviews
    const handleReviewAdded = () => {
      loadTestimonials()
      setCurrentIndex(0) // Reset to first testimonial when new one is added
    }
    
    window.addEventListener('reviewAdded', handleReviewAdded)
    
    return () => {
      window.removeEventListener('reviewAdded', handleReviewAdded)
    }
  }, [])

  // Filter testimonials based on tags
  const filteredTestimonials = filterTags.length > 0
    ? allTestimonials.filter(testimonial =>
        testimonial.tags.some(tag => filterTags.includes(tag))
      )
    : allTestimonials.filter(testimonial =>
        ['Allgemein', 'Digital', 'Eltern-Feedback'].some(tag => 
          testimonial.tags.includes(tag)
        )
      )

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, filteredTestimonials.length, autoPlayInterval])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const toggleQuote = (id) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const currentTestimonial = filteredTestimonials[currentIndex]
  const isExpanded = expandedQuotes[currentTestimonial?.id] || false
  const maxLength = 200
  const shouldTruncate = currentTestimonial?.quote.length > maxLength
  const displayQuote = shouldTruncate && !isExpanded
    ? currentTestimonial.quote.substring(0, maxLength) + '...'
    : currentTestimonial?.quote

  if (filteredTestimonials.length === 0) {
    return null
  }

  return (
    <div 
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <div className="testimonial-header">
              <div className="testimonial-info">
                <h4 className="testimonial-name">{currentTestimonial.name}</h4>
                <p className="testimonial-role">{currentTestimonial.role}</p>
                {currentTestimonial.subject && (
                  <span className="testimonial-subject">{currentTestimonial.subject}</span>
                )}
              </div>
              <div className="testimonial-rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
            </div>

            <blockquote className="testimonial-quote">
              {displayQuote}
              {shouldTruncate && (
                <button
                  className="read-more-btn"
                  onClick={() => toggleQuote(currentTestimonial.id)}
                >
                  {isExpanded 
                    ? (t?.testimonials?.readLess || 'Weniger anzeigen') 
                    : (t?.testimonials?.readMore || 'Mehr lesen')
                  }
                </button>
              )}
            </blockquote>

            <div className="testimonial-tags">
              {currentTestimonial.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {filteredTestimonials.length > 1 && (
          <>
            <button
              className="carousel-nav prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            <button
              className="carousel-nav next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>

            <div className="carousel-dots">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TestimonialCarousel

