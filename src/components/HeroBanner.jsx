import { Link } from 'react-router-dom'
import '../index.css'

const HeroBanner = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Elevate Your Digital Vibe 🚀
          </h1>
          <p style={styles.tagline}>
            Innovative Solutions for Bold Businesses & Creators
          </p>
          
          <blockquote style={styles.quote}>
            <span style={styles.quoteIcon}>"</span>
            Innovation distinguishes between a leader and a follower.
            <span style={styles.quoteIcon}>"</span>
            <cite style={styles.citation}>— Steve Jobs</cite>
          </blockquote>

          <div style={styles.description}>
            <p>
              We're a partnership-driven digital agency empowering Nigerian and African 
              businesses with cutting-edge tech. From AI-powered automation to blockchain 
              integrations, we build sustainable digital ecosystems that drive 
              <strong> real growth</strong>.
            </p>
          </div>

          <div style={styles.ctaGroup}>
            <a href="#packages" style={styles.primaryBtn}>
              Get Started
            </a>
            <a href="#services" style={styles.secondaryBtn}>
              Explore Services
            </a>
          </div>

          <div style={styles.trustBadges}>
            <span style={styles.badge}>🌍 Global Tech</span>
            <span style={styles.badge}>🤝 Local Partnership</span>
            <span style={styles.badge}>♻️ Sustainable</span>
          </div>
        </div>

        {/* Visual Element */}
        <div style={styles.visual}>
          <div style={styles.floatingCard}>
            <div style={styles.cardHeader}>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
            </div>
            <div style={styles.cardBody}>
              <div style={styles.iconGrid}>
                <span style={styles.serviceIcon}>🌐</span>
                <span style={styles.serviceIcon}>🤖</span>
                <span style={styles.serviceIcon}>⛓️</span>
                <span style={styles.serviceIcon}>🎨</span>
              </div>
              <div style={styles.pulseIndicator}>
                <span style={styles.pulse}></span>
                <span style={styles.statusText}>Powering Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    padding: '6rem 1rem 4rem',
    background: 'linear-gradient(180deg, rgba(176, 38, 255, 0.1) 0%, rgba(10, 10, 10, 1) 100%)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  content: {
    textAlign: 'left',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.1',
    marginBottom: '1rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, var(--neon-purple) 0%, var(--neon-pink) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '1.5rem',
    color: 'var(--text-main)',
    marginBottom: '2rem',
    fontWeight: '600',
  },
  quote: {
    borderLeft: '4px solid var(--neon-green)',
    paddingLeft: '1.5rem',
    margin: '2rem 0',
    fontStyle: 'italic',
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  quoteIcon: {
    color: 'var(--neon-green)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  citation: {
    display: 'block',
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontStyle: 'normal',
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '1rem 2.5rem',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(176, 38, 255, 0.4)',
    transition: 'transform var(--transition-fast)',
    display: 'inline-block',
  },
  secondaryBtn: {
    border: '2px solid var(--neon-green)',
    color: 'var(--neon-green)',
    padding: '1rem 2.5rem',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
    display: 'inline-block',
  },
  trustBadges: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  visual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingCard: {
    background: 'var(--bg-card)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '400px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  cardHeader: {
    padding: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    gap: '0.5rem',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardBody: {
    padding: '3rem 2rem',
  },
  iconGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  serviceIcon: {
    fontSize: '3rem',
    textAlign: 'center',
  },
  pulseIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    justifyContent: 'center',
  },
  pulse: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'var(--neon-green)',
    animation: 'pulse 2s infinite',
    boxShadow: '0 0 10px var(--neon-green)',
  },
  statusText: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  }
}

export default HeroBanner
