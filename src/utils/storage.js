// Utility functions for storing and retrieving reviews

const STORAGE_KEY = 'adams_mathe_reviews'

export const saveReview = (review) => {
  try {
    // Generate a unique ID based on timestamp
    const newReview = {
      ...review,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'approved' // Automatically approved - can be changed to 'pending' if you want manual approval
    }

    // Get existing reviews from localStorage
    const existingReviews = getReviews()
    
    // Add new review
    const updatedReviews = [newReview, ...existingReviews]
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews))
    
    return newReview
  } catch (error) {
    console.error('Error saving review:', error)
    throw error
  }
}

export const getReviews = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    
    const reviews = JSON.parse(stored)
    // Filter to show only approved reviews (or pending if you want to show them)
    return reviews.filter(review => review.status === 'approved' || review.status === 'pending')
  } catch (error) {
    console.error('Error getting reviews:', error)
    return []
  }
}

export const getAllReviews = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    return JSON.parse(stored)
  } catch (error) {
    console.error('Error getting all reviews:', error)
    return []
  }
}

export const approveReview = (reviewId) => {
  try {
    const reviews = getAllReviews()
    const updatedReviews = reviews.map(review =>
      review.id === reviewId ? { ...review, status: 'approved' } : review
    )
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews))
    return true
  } catch (error) {
    console.error('Error approving review:', error)
    return false
  }
}

export const rejectReview = (reviewId) => {
  try {
    const reviews = getAllReviews()
    const updatedReviews = reviews.map(review =>
      review.id === reviewId ? { ...review, status: 'rejected' } : review
    )
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews))
    return true
  } catch (error) {
    console.error('Error rejecting review:', error)
    return false
  }
}

