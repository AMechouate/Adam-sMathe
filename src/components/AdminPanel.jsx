import { useState, useEffect } from 'react'
import { getAllReviews, approveReview, rejectReview } from '../utils/storage'
import './AdminPanel.css'

const AdminPanel = () => {
  const [reviews, setReviews] = useState([])
  const [filter, setFilter] = useState('all') // all, pending, approved, rejected

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = () => {
    const allReviews = getAllReviews()
    setReviews(allReviews)
  }

  const handleApprove = (reviewId) => {
    if (approveReview(reviewId)) {
      loadReviews()
      // Trigger refresh of testimonials
      window.dispatchEvent(new CustomEvent('reviewAdded'))
    }
  }

  const handleReject = (reviewId) => {
    if (rejectReview(reviewId)) {
      loadReviews()
    }
  }

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.status === filter)

  // Only show admin panel if there are reviews (you can add authentication later)
  // For now, it's visible to everyone - you can hide it with CSS or add authentication
  if (reviews.length === 0) {
    return null
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h3>Bewertungsverwaltung</h3>
        <div className="admin-filters">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            Alle ({reviews.length})
          </button>
          <button 
            className={filter === 'pending' ? 'active' : ''}
            onClick={() => setFilter('pending')}
          >
            Ausstehend ({reviews.filter(r => r.status === 'pending').length})
          </button>
          <button 
            className={filter === 'approved' ? 'active' : ''}
            onClick={() => setFilter('approved')}
          >
            Genehmigt ({reviews.filter(r => r.status === 'approved').length})
          </button>
        </div>
      </div>

      <div className="admin-reviews">
        {filteredReviews.map((review) => (
          <div key={review.id} className={`admin-review-card ${review.status}`}>
            <div className="review-header">
              <div>
                <h4>{review.name}</h4>
                <p>{review.role} - {review.subject}</p>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <div className="review-status">
                <span className={`status-badge ${review.status}`}>
                  {review.status === 'pending' && 'Ausstehend'}
                  {review.status === 'approved' && 'Genehmigt'}
                  {review.status === 'rejected' && 'Abgelehnt'}
                </span>
              </div>
            </div>
            
            <p className="review-quote">{review.quote}</p>
            
            {review.tags && review.tags.length > 0 && (
              <div className="review-tags">
                {review.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="review-actions">
              {review.status === 'pending' && (
                <>
                  <button 
                    className="btn-approve"
                    onClick={() => handleApprove(review.id)}
                  >
                    Genehmigen
                  </button>
                  <button 
                    className="btn-reject"
                    onClick={() => handleReject(review.id)}
                  >
                    Ablehnen
                  </button>
                </>
              )}
              {review.status === 'approved' && (
                <button 
                  className="btn-reject"
                  onClick={() => handleReject(review.id)}
                >
                  Genehmigung zurückziehen
                </button>
              )}
              {review.status === 'rejected' && (
                <button 
                  className="btn-approve"
                  onClick={() => handleApprove(review.id)}
                >
                  Genehmigen
                </button>
              )}
            </div>

            <div className="review-date">
              {new Date(review.date).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel

