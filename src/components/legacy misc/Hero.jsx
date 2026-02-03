import { Link } from 'react-router-dom'
import '../index.css'

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <div style={styles.badge}>🚀 Launching Beta</div>
        <h1 style={styles.title}>
          Ditch amateur links. <br />
          <span style={styles.highlight}>Go Pro</span> with paywalls that pay off.
        </h1>
        <p style={styles.subtitle}>
          The all-in-one WaaS platform for Telegram creators. 
          Custom sites, secure paywalls, and auto-DM bots to multiply your subs.
        </p>
        <div style={styles.ctaGroup}>
          <Link to="/signup" style={styles.primaryBtn}>Start Free Trial</Link>
          <Link to="/features" style={styles.secondaryBtn}>See How It Works</Link>
        </div>
        <p style={styles.microCopy}>Creating accounts allowed for 15 users today.</p>
      </div>
      
      {/* Visual Element (Placeholder for video/image) */}
      <div style={styles.visual}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.dot}></div>
            <div style={styles.dot}></div>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.skeletonText}></div>
            <div style={styles.skeletonImg}>
               <span style={{fontSize: '3rem'}}>💸</span>
            </div>
            <div style={styles.skeletonBtn}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    padding: '4rem 1rem 6rem',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    alignItems: 'center',
    gap: '4rem',
  },
  content: {
    textAlign: 'left',
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    color: 'var(--neon-green)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    border: '1px solid rgba(57, 255, 20, 0.2)',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    fontWeight: '800',
  },
  highlight: {
    color: 'var(--neon-purple)',
    textShadow: '0 0 20px rgba(176, 38, 255, 0.4)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    maxWidth: '500px',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(57, 255, 20, 0.4)',
    transition: 'transform 0.2s',
  },
  secondaryBtn: {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
  },
  microCopy: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    marginTop: '0.5rem',
    fontStyle: 'italic',
  },
  visual: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    background: 'var(--bg-card)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    height: '350px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    position: 'relative',
    transform: 'rotate(-2deg)',
  },
  cardHeader: {
    padding: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    gap: '0.5rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardBody: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  skeletonText: {
    width: '80%',
    height: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
  },
  skeletonImg: {
    width: '100%',
    height: '150px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonBtn: {
    width: '60%',
    height: '40px',
    background: 'var(--neon-purple)',
    borderRadius: '4px',
    marginTop: 'auto',
  }
}

export default Hero
