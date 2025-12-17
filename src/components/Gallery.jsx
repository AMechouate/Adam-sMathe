import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Gallery.css'

const Gallery = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Get all images from the Bilder folder
  const images = Array.from({ length: 14 }, (_, i) => `/Bilder/Image${i + 1}.png`)

  const openLightbox = (index) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="gallery-subtitle">{t.gallery.subtitle}</p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FiX />
            </button>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <FiChevronLeft />
            </button>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <FiChevronRight />
            </button>
            <img 
              src={images[selectedImage]} 
              alt={`Gallery image ${selectedImage + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lightbox-counter">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

