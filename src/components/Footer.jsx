import '../index.css'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__logo">GentriVibe</h3>
            <p className="footer__text">Elevate Your Digital Vibe</p>
            <p className="footer__text">Innovative solutions for bold businesses & creators.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <a href="/services/web-development" className="footer__link">Web Development</a>
            <a href="/services/ai" className="footer__link">AI Products</a>
            <a href="/services/blockchain" className="footer__link">Blockchain</a>
            <a href="/creator-tools" className="footer__link">Creator Tools</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <a href="#about" className="footer__link">About Us</a>
            <a href="/terms" className="footer__link">Terms</a>
            <a href="/privacy" className="footer__link">Privacy</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <a 
              href="https://wa.me/2348000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__whatsapp"
              aria-label="Contact us on WhatsApp"
            >
              💬 WhatsApp Us
            </a>
            <a href="mailto:hello@gentrivibe.com" className="footer__link">hello@gentrivibe.com</a>
          </div>
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} GentriVibe. All rights reserved. 🚀
        </div>
      </div>
    </footer>
  )
}

export default Footer
