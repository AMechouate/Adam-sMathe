import './Footer.css'

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo1.png" alt="Adam's Mathe Logo" />
            <span>Adam's Mathe</span>
          </div>
          <p className="footer-rights">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

