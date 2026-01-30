import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const CreatorTools = () => {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Amplify Your Creative Flow 🎨
          </h1>
          <p style={styles.heroSubtitle}>
            Custom branded sites that turn fans into superfans—built for Afrobeats artists, 
            influencers, and bold creators.
          </p>
          <div style={styles.badges}>
            <span style={styles.badge}>🎤 Artists</span>
            <span style={styles.badge}>📸 Influencers</span>
            <span style={styles.badge}>🎬 Creatives</span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What You Get</h2>
        <div style={styles.grid}>
          <FeatureCard 
            icon="🌐"
            title="Custom Branded Sites"
            desc="Your own .com domain with your vibe. No templates, just YOU."
          />
          <FeatureCard 
            icon="🔒"
            title="Paywalled Galleries"
            desc="Tease content for free, lock premium access. Music previews, exclusive photos, behind-the-scenes."
          />
          <FeatureCard 
            icon="💬"
            title="Telegram/WhatsApp Bots"
            desc="Auto-DM fans, drive engagement 24/7. Perfect for fanbase growth."
          />
          <FeatureCard 
            icon="📊"
            title="Analytics Dashboard"
            desc="Track unlocks, views, and conversions. Know what content hits."
          />
        </div>
      </section>

      {/* Use Cases */}
      <section style={styles.useCases}>
        <h2 style={styles.sectionTitle}>Perfect For</h2>
        <div style={styles.useCasesGrid}>
          <UseCaseCard 
            emoji="🎤"
            title="Afrobeats Artists"
            examples={[
              'Album teasers with paywalled full tracks',
              'Exclusive behind-the-scenes content',
              'Fan DM automation for tour announcements'
            ]}
          />
          <UseCaseCard 
            emoji="📸"
            title="Influencers"
            examples={[
              'Branded bio link hub (better than Linktree)',
              'Paywalled premium content',
              'Auto-DM for brand collabs'
            ]}
          />
          <UseCaseCard 
            emoji="🎨"
            title="Content Creators"
            examples={[
              'Portfolio paywalls for clients',
              'Tutorial sales via secure links',
              'Community engagement bots'
            ]}
          />
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={styles.pricing}>
        <h2 style={styles.sectionTitle}>Choose Your Tier</h2>
        <div style={styles.tabs}>
          <button 
            style={activeTab === 'basic' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('basic')}
          >
            Basic
          </button>
          <button 
            style={activeTab === 'pro' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('pro')}
          >
            Pro
          </button>
        </div>

        {activeTab === 'basic' ? (
          <div style={styles.tierCard}>
            <h3 style={styles.tierTitle}>Basic <span style={styles.tierPrice}>₦15,000/mo</span></h3>
            <ul style={styles.tierFeatures}>
              <li>✓ Custom .com domain</li>
              <li>✓ Unlimited photo uploads</li>
              <li>✓ Basic analytics dashboard</li>
              <li>✓ Age verification gate</li>
              <li>✓ Telegram link integration</li>
            </ul>
            <Link to="/signup">
              <button style={styles.tierBtn}>Start Free Trial</button>
            </Link>
          </div>
        ) : (
          <div style={styles.tierCard}>
            <span style={styles.comingSoonBadge}>Coming Soon</span>
            <h3 style={styles.tierTitle}>Pro <span style={styles.tierPrice}>₦25,000/mo</span></h3>
            <ul style={styles.tierFeatures}>
              <li>✓ Everything in Basic</li>
              <li>✓ AI-powered auto-DM bots</li>
              <li>✓ Email collection & CRM</li>
              <li>✓ Advanced SEO tools</li>
              <li>✓ Multi-platform sync (OnlyFans, Patreon)</li>
              <li>✓ Zero transaction fees</li>
              <li>✓ Priority support</li>
            </ul>
            <Link to="/signup">
              <button style={styles.waitlistBtn}>Join Waitlist</button>
            </Link>
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to elevate your creative vibe?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Join creators already earning 10x with branded sites.
        </p>
        <Link to="/signup">
          <button style={styles.ctaBtn}>Get Started Today</button>
        </Link>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, desc }) => (
  <div style={styles.card}>
    <span style={styles.cardIcon}>{icon}</span>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </div>
)

const UseCaseCard = ({ emoji, title, examples }) => (
  <div style={styles.useCaseCard}>
    <div style={styles.useCaseEmoji}>{emoji}</div>
    <h3 style={styles.useCaseTitle}>{title}</h3>
    <ul style={styles.exampleList}>
      {examples.map((ex, i) => (
        <li key={i}>{ex}</li>
      ))}
    </ul>
  </div>
)

const styles = {
  page: {
    backgroundColor: 'var(--bg-dark)',
  },
  hero: {
    padding: '6rem 1rem 4rem',
    background: 'linear-gradient(180deg, rgba(233, 30, 99, 0.1) 0%, rgba(10, 10, 10, 1) 100%)',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, var(--pink-package) 0%, var(--neon-purple) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  badges: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '0.5rem 1.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  section: {
    padding: '5rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    fontWeight: '700',
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
  cardIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.8rem',
  },
  cardDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  useCases: {
    padding: '5rem 1rem',
    backgroundColor: 'rgba(233, 30, 99, 0.03)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  useCasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  useCaseCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(233, 30, 99, 0.2)',
  },
  useCaseEmoji: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  useCaseTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: 'var(--pink-package)',
  },
  exampleList: {
    listStyle: 'none',
    color: 'var(--text-muted)',
    lineHeight: '2',
  },
  pricing: {
    padding: '5rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  tabs: {
    display: 'inline-flex',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '30px',
    padding: '0.5rem',
    gap: '0.5rem',
    marginBottom: '3rem',
  },
  tab: {
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
  activeTab: {
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    color: '#fff',
    backgroundColor: 'var(--pink-package)',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)',
  },
  tierCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '3rem',
    borderRadius: '20px',
    border: '2px solid var(--pink-package)',
    position: 'relative',
  },
  comingSoonBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '0.3rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
  },
  tierTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  tierPrice: {
    color: 'var(--pink-package)',
  },
  tierFeatures: {
    listStyle: 'none',
    textAlign: 'left',
    marginBottom: '2.5rem',
    fontSize: '1.1rem',
    lineHeight: '2.5',
  },
  tierBtn: {
    backgroundColor: 'var(--pink-package)',
    color: '#fff',
    padding: '1rem 3rem',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.4)',
  },
  waitlistBtn: {
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '1rem 3rem',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.4)',
  },
  cta: {
    padding: '5rem 1rem',
    textAlign: 'center',
    backgroundColor: 'rgba(176, 38, 255, 0.05)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  ctaBtn: {
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    padding: '1.2rem 3rem',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1.1rem',
    boxShadow: '0 4px 20px rgba(57, 255, 20, 0.4)',
  }
}

export default CreatorTools
