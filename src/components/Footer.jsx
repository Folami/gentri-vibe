import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__col">
            <div className="footer__logo">GentriVibe</div>
            <p className="footer__text">
              Elevating African businesses with global-class technology. 
              Innovation meets partnership.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <Link to="/" className="footer__link">Home</Link>
            <a href="#services" className="footer__link">Services</a>
            <a href="#about" className="footer__link">About Us</a>
            <Link to="/creator-tools" className="footer__link">Creator Tools</Link>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="footer__col">
            <h4 className="footer__heading">Support</h4>
            <Link to="/login" className="footer__link">Login</Link>
            <Link to="/signup" className="footer__link">Sign Up</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
            <Link to="/pricing" className="footer__link">Pricing</Link>
          </div>

          {/* Column 4: Connect */}
          <div className="footer__col">
            <h4 className="footer__heading">Connect</h4>
            <p className="footer__text">LAGOS, NIGERIA</p>
            <a 
              href="https://wa.me/234XXXXXXXXXX" 
              className="footer__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us →
            </a>
            <div className="footer__socials">
              {/* Social icons can be added here if needed */}
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <p>&copy; {currentYear} GentriVibe Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
