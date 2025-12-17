import Logo from './Logo'
import './Footer.css'

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Logo />
          <p className="footer-rights">{t.footer.rights.replace('2024', currentYear)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

