import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import Logo from './Logo'
import './Header.css'

const Header = ({ t, language, changeLanguage, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
    { code: 'ar', name: 'AR', flag: '🇲🇦' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Logo />

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>{t.nav.home}</a>
          <a href="#about" onClick={() => scrollToSection('about')}>{t.nav.about}</a>
          <a href="#services" onClick={() => scrollToSection('services')}>{t.nav.services}</a>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
        </nav>

        <div className="header-controls">
          <div className="language-switcher">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code)}
                title={lang.name}
              >
                <span className="flag">{lang.flag}</span>
              </button>
            ))}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

