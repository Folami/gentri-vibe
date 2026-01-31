import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/gentri-vibe-logo-1.jpg'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleLogout = async () => {
    try {
      await logout()
      setIsOpen(false)
      navigate('/login')
    } catch (err) {
      console.error('Failed to log out', err)
    }
  }

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
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="GentriVibe Home">
          <img src={logo} alt="GentriVibe Logo" className="navbar__logo-img" />
          {/* <span className="navbar__logo-text">GentriVibe</span> */}
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        {/* Desktop Nav Links */}
        <div className="navbar__links">
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="navbar__link">
            Services
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="navbar__link">
            About
          </a>
          <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="navbar__link">
            Packages
          </a>
          <Link to="/creator-tools" className="navbar__link">Creator Tools</Link>
          {currentUser && (
            <Link to="/dashboard" className="navbar__link">Dashboard</Link>
          )}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="navbar__auth">
          {currentUser ? (
            <>
              <button 
                onClick={handleLogout} 
                className="navbar__link-button" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Logout
              </button>
              <Link to="/dashboard">
                <button className="navbar__cta">Dashboard</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar__link-button">Login</Link>
              <Link to="/signup">
                <button className="navbar__cta">Get Started</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setIsOpen(false)}>
          <div 
            className="navbar__mobile-menu" 
            id="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="navbar__mobile-link">
              Services
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="navbar__mobile-link">
              About
            </a>
            <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="navbar__mobile-link">
              Packages
            </a>
            <Link to="/creator-tools" className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
              Creator Tools
            </Link>
            {currentUser && (
              <Link to="/dashboard" className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            )}
            <div className="navbar__mobile-divider"></div>
            
            {currentUser ? (
              <button 
                className="navbar__mobile-cta" 
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="navbar__mobile-link" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <button className="navbar__mobile-cta">Get Started</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
