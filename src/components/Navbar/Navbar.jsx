import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/gentri-vibe-logo-1.jpg'
import ContactModal from '../ContactModal/ContactModal'
import { navbarData } from '../../data/components/navbarData'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // Mobile menu state
  const [isModalOpen, setIsModalOpen] = useState(false) // Contact modal state
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const { serviceLinks } = navbarData

  const handleLogout = async () => {
    try {
      await logout()
      setIsOpen(false)
      navigate('/login')
    } catch (err) {
      console.error('Failed to log out', err)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  const openContact = (e) => {
    e.preventDefault()
    closeMenu()
    setIsModalOpen(true)
  }

  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="navbar__container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={logo} alt="GentriVibe Logo" className="navbar__logo-img" />
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
          </button>

          {/* Desktop Nav Links */}
          <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
            <Link to="/" className="navbar__link" onClick={closeMenu}>Home</Link>
            
            <Link to="/how-we-gentrivibe" className="navbar__link" onClick={closeMenu}>
              How we Gentrivibe
            </Link>

            <Link to="/about-us" className="navbar__link" onClick={closeMenu}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="navbar__dropdown">
              <Link to="/services" className="navbar__link dropdown-trigger" onClick={closeMenu}>
                Services ▾
              </Link>
              <div className="dropdown-menu">
                {serviceLinks.map((service) => (
                  <Link 
                    key={service.path} 
                    to={service.path} 
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="#" onClick={openContact} className="navbar__link">Contact Us</a>

            {/* Auth Links */}
            {currentUser ? (
              <>
                <Link to="/dashboard" className="navbar__link" onClick={closeMenu}>Dashboard</Link>
                <button 
                  onClick={handleLogout} 
                  className="navbar__link logout-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="navbar__auth-mobile">
                <Link to="/login" className="navbar__link" onClick={closeMenu}>Login</Link>
                <Link to="/signup" className="btn btn-primary navbar__cta" onClick={closeMenu}>
                  Get Started
                </Link>
              </div>
            )}
          </div>
          
          {/* Desktop CTA (Outside common links for styling) */}
          <div className="navbar__auth-desktop">
             {!currentUser && (
               <Link to="/signup" className="btn btn-primary navbar__cta">
                 Get Started
               </Link>
             )}
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar
