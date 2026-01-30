import { Link } from 'react-router-dom'
import '../index.css'

const Bots = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Auto-DM your way to 10x revenue 🤖</h1>
        <p style={styles.subtitle}>
          Stop manually replying to every fan. Let our bots do the flirting, upselling, and conversions for you.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <div style={styles.grid}>
          <StepCard 
            step="1"
            title="Connect Your Bot"
            desc="Link your Telegram or WhatsApp account in 2 clicks. We handle the rest."
          />
          <StepCard 
            step="2"
            title="Customize Messages"
            desc="Set up auto-replies, teasers, and upsell scripts that match your vibe."
          />
          <StepCard 
            step="3"
            title="Watch Money Roll In"
            desc="Fans get instant responses 24/7. You get more subs without lifting a finger."
          />
        </div>
      </section>

      <section style={styles.platforms}>
        <h2 style={styles.sectionTitle}>Supported Platforms</h2>
        <div style={styles.platformGrid}>
          <PlatformCard 
            icon="💬"
            name="Telegram"
            desc="Perfect for adult creators. Use @BotFather to create your bot, then paste the token into GentriVibe."
            link="#telegram"
          />
          <PlatformCard 
            icon="📱"
            name="WhatsApp"
            desc="Professional vibes. Use Twilio or similar to get a number, then connect via webhook."
            link="#whatsapp"
          />
        </div>
      </section>

      <section style={styles.cta}>
        <h2>Ready to automate?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Bot integration is available on the Pro plan.
        </p>
        <Link to="/pricing">
          <button style={styles.ctaBtn}>View Pro Pricing</button>
        </Link>
      </section>
    </div>
  )
}

const StepCard = ({ step, title, desc }) => (
  <div style={styles.card}>
    <div style={styles.stepBadge}>{step}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </div>
)

const PlatformCard = ({ icon, name, desc, link }) => (
  <div style={styles.platformCard}>
    <div style={styles.platformIcon}>{icon}</div>
    <h3>{name}</h3>
    <p style={styles.platformDesc}>{desc}</p>
    <a href={link} style={styles.learnMore}>Learn more →</a>
  </div>
)

const styles = {
  page: {
    padding: '4rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  stepBadge: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto 1.5rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.8rem',
  },
  cardDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  platforms: {
    marginBottom: '5rem',
  },
  platformGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  platformCard: {
    backgroundColor: 'rgba(57, 255, 20, 0.05)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(57, 255, 20, 0.2)',
  },
  platformIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  platformDesc: {
    color: 'var(--text-muted)',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
  learnMore: {
    color: 'var(--neon-green)',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  cta: {
    textAlign: 'center',
    backgroundColor: 'var(--bg-card)',
    padding: '4rem 2rem',
    borderRadius: '20px',
  },
  ctaBtn: {
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '1rem 3rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.4)',
  }
}

export default Bots
