import { useState, useEffect } from 'react'
import { translations } from './translations'
import Header from './components/Header'
import Hero from './components/Hero'
import AdamMethod from './components/AdamMethod'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState('de')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Dark mode is default, but load saved preference if exists
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const savedLang = localStorage.getItem('language') || 'de'
    setTheme(savedTheme)
    setLanguage(savedLang)
    document.documentElement.setAttribute('data-theme', savedTheme)
    document.documentElement.setAttribute('lang', savedLang === 'ar' ? 'ar' : savedLang)
    document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }

  const t = translations[language]

  return (
    <div className="app">
      <Header 
        t={t} 
        language={language} 
        changeLanguage={changeLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero t={t} />
      <AdamMethod t={t} />
      <About t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App

