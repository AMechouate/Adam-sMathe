import Logo from './Logo'
import './Footer.css'

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Logo />
          <p className="footer-rights">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

