import '../index.css'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.col}>
          <h3 style={styles.logo}>GentriVibe</h3>
          <p style={styles.text}>Elevate Your Digital Vibe</p>
          <p style={styles.text}>Innovative solutions for bold businesses & creators.</p>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Services</h4>
          <a href="/services/web-development" style={styles.link}>Web Development</a>
          <a href="/services/ai" style={styles.link}>AI Products</a>
          <a href="/services/blockchain" style={styles.link}>Blockchain</a>
          <a href="/creator-tools" style={styles.link}>Creator Tools</a>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Company</h4>
          <a href="#about" style={styles.link}>About Us</a>
          <a href="/terms" style={styles.link}>Terms</a>
          <a href="/privacy" style={styles.link}>Privacy</a>
        </div>
        <div style={styles.col}>
          <h4 style={styles.heading}>Contact</h4>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" style={styles.whatsappLink}>
            💬 WhatsApp Us
          </a>
          <a href="mailto:hello@gentrivibe.com" style={styles.link}>hello@gentrivibe.com</a>
        </div>
      </div>
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} GentriVibe. All rights reserved. 🚀
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-card)',
    padding: '4rem 0 2rem',
    marginTop: 'auto',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'var(--neon-purple)',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.5rem',
    letterSpacing: '0.05em',
  },
  text: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
  link: {
    color: 'var(--text-main)',
    fontSize: '0.9rem',
    opacity: 0.8,
  },
  whatsappLink: {
    color: 'var(--neon-green)',
    fontSize: '0.9rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
  copyright: {
    textAlign: 'center',
    color: 'var(--text-muted)',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '0.8rem',
  }
}

export default Footer
