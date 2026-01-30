import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/gentri-logo.jpg'
import '../index.css' // Ensure vars are available

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoContainer}>
          <img src={logo} alt="GentriVibe Logo" style={styles.logoImg} />
        </Link>
        <div style={styles.links}>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} style={styles.link}>Services</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={styles.link}>About</a>
          <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} style={styles.link}>Packages</a>
          <Link to="/creator-tools" style={styles.link}>Creator Tools</Link>
        </div>
        <div style={styles.auth}>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup">
            <button style={styles.ctaButton}>Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    padding: '1.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '40px',
    objectFit: 'contain',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '800',
    letterSpacing: '-0.05em',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    fontSize: '0.95rem',
    fontWeight: '500',
    opacity: 0.9,
  },
  auth: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  ctaButton: {
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    padding: '0.6rem 1.2rem',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    transition: 'transform 0.2s',
  }
}

export default Navbar
