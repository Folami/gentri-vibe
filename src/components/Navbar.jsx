import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/gentri-logo.jpg'
import './Navbar.css'
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    setIsOpen(false) // Close mobile menu after click
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav style={styles.nav} role="navigation" aria-label="Main navigation">
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logoContainer} aria-label="GentriVibe Home">
          <img src={logo} alt="GentriVibe Logo" style={styles.logoImg} />
          <span style={styles.logoText}>GentriVibe</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          style={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span style={{...styles.hamburgerLine, ...(isOpen && styles.hamburgerLineOpen1)}}></span>
          <span style={{...styles.hamburgerLine, ...(isOpen && styles.hamburgerLineOpen2)}}></span>
          <span style={{...styles.hamburgerLine, ...(isOpen && styles.hamburgerLineOpen3)}}></span>
        </button>

        {/* Desktop Nav Links */}
        <div style={styles.desktopLinks}>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} style={styles.link}>
            Services
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={styles.link}>
            About
          </a>
          <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} style={styles.link}>
            Packages
          </a>
          <Link to="/creator-tools" style={styles.link}>Creator Tools</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div style={styles.desktopAuth}>
          <Link to="/login" style={styles.linkButton}>Login</Link>
          <Link to="/signup">
            <button style={styles.ctaButton}>Get Started</button>
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div style={styles.mobileMenuOverlay} onClick={() => setIsOpen(false)}>
            <div 
              style={styles.mobileMenu} 
              id="mobile-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} style={styles.mobileLink}>
                Services
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={styles.mobileLink}>
                About
              </a>
              <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} style={styles.mobileLink}>
                Packages
              </a>
              <Link to="/creator-tools" style={styles.mobileLink} onClick={() => setIsOpen(false)}>
                Creator Tools
              </Link>
              <div style={styles.mobileDivider}></div>
              <Link to="/login" style={styles.mobileLink} onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button style={styles.mobileCtaButton}>Get Started</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 'var(--z-sticky)',
    backgroundColor: 'rgba(10, 10, 30, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: 'var(--space-md) 0',
  },
  container: {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 var(--space-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-md)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    zIndex: 'var(--z-dropdown)',
  },
  logoImg: {
    height: '32px',
    width: 'auto',
    objectFit: 'contain',
  },
  logoText: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--font-lg)',
    fontWeight: 'var(--font-weight-bold)',
    background: 'linear-gradient(135deg, var(--neon-purple) 0%, var(--neon-pink) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'none', // Hidden on mobile by default
  },
  // Hamburger Menu (Mobile Only)
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: 'var(--space-sm)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 'var(--z-dropdown)',
  },
  hamburgerLine: {
    width: '25px',
    height: '3px',
    backgroundColor: 'var(--text-primary)',
    borderRadius: 'var(--radius-sm)',
    transition: 'all var(--transition-base)',
  },
  hamburgerLineOpen1: {
    transform: 'rotate(45deg) translate(7px, 7px)',
  },
  hamburgerLineOpen2: {
    opacity: 0,
  },
  hamburgerLineOpen3: {
    transform: 'rotate(-45deg) translate(7px, -7px)',
  },
  // Desktop Links (Hidden on Mobile)
  desktopLinks: {
    display: 'none',
    gap: 'var(--space-xl)',
    alignItems: 'center',
  },
  desktopAuth: {
    display: 'none',
    gap: 'var(--space-md)',
    alignItems: 'center',
  },
  link: {
    fontSize: 'var(--font-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--text-secondary)',
    transition: 'color var(--transition-fast)',
    cursor: 'pointer',
  },
  linkButton: {
    fontSize: 'var(--font-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--text-secondary)',
    padding: 'var(--space-sm) var(--space-md)',
  },
  ctaButton: {
    backgroundColor: 'var(--neon-purple)',
    color: 'var(--text-primary)',
    padding: 'var(--space-sm) var(--space-lg)',
    borderRadius: 'var(--radius-full)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-sm)',
    boxShadow: 'var(--shadow-glow)',
    transition: 'all var(--transition-base)',
  },
  // Mobile Menu
  mobileMenuOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 'var(--z-modal-backdrop)',
    animation: 'fadeIn 0.3s ease',
  },
  mobileMenu: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: 'var(--space-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)',
    animation: 'slideInLeft 0.3s ease',
  },
  mobileLink: {
    fontSize: 'var(--font-lg)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--text-primary)',
    padding: 'var(--space-md)',
    borderRadius: 'var(--radius-md)',
    transition: 'background-color var(--transition-fast)',
  },
  mobileDivider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: 'var(--space-sm) 0',
  },
  mobileCtaButton: {
    backgroundColor: 'var(--neon-purple)',
    color: 'var(--text-primary)',
    padding: 'var(--space-md) var(--space-lg)',
    borderRadius: 'var(--radius-full)',
    fontWeight: 'var(--font-weight-bold)',
    fontSize: 'var(--font-base)',
    width: '100%',
    boxShadow: 'var(--shadow-glow)',
  },
}

// Media Queries (Applied via inline JS for demonstration - use CSS modules in production)
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  
  if (mediaQuery.matches) {
    // Show desktop elements on larger screens
    styles.hamburger.display = 'none'
    styles.desktopLinks.display = 'flex'
    styles.desktopAuth.display = 'flex'
    styles.logoText.display = 'block'
  }
}

export default Navbar
