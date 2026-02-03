import { Link } from 'react-router-dom'
import '../index.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-card)', 
      paddingTop: '4rem', 
      paddingBottom: '2rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem', 
          marginBottom: '3rem' 
        }}>
          {/* Column 1: Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(to right, var(--accent-blue), var(--accent-green))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              GentriVibe
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Elevating African businesses with global-class technology. Innovation meets partnership.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <Link to="/about-us" style={{ color: 'var(--text-secondary)' }}>About Us</Link>
            <Link to="/how-we-gentrivibe" style={{ color: 'var(--text-secondary)' }}>How We Work</Link>
          </div>

          {/* Column 3: Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Services</h4>
            <Link to="/services/sme-basic" style={{ color: 'var(--text-secondary)' }}>For Startups</Link>
            <Link to="/services/e-commerce-vet" style={{ color: 'var(--text-secondary)' }}>For E-Commerce</Link>
            <Link to="/services/content-creator-portals" style={{ color: 'var(--text-secondary)' }}>For Creators</Link>
          </div>

          {/* Column 4: Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect</h4>
            <p style={{ color: 'var(--text-secondary)' }}>LAGOS, NIGERIA</p>
            <a 
              href="https://wa.me/234XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}
            >
              WhatsApp Us →
            </a>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '2rem', 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)' 
        }}>
          <p>&copy; {currentYear} GentriVibe Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
