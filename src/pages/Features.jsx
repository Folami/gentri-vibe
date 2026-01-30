import { useState } from 'react'
import '../index.css'

const Features = () => {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tools for every stage of your empire.</h1>
        <div style={styles.tabs}>
          <button 
            style={activeTab === 'basic' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('basic')}
          >
            Basic (MVP)
          </button>
          <button 
            style={activeTab === 'pro' ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab('pro')}
          >
            Pro (Coming Soon)
          </button>
        </div>
      </header>

      <div style={styles.content}>
        {activeTab === 'basic' ? (
          <div style={styles.grid}>
            <FeatureCard 
              icon="🖼️"
              title="Paywalled Galleries"
              desc="Upload photos, set a price, and generate a secure link. Fans pay, you get paid."
            />
            <FeatureCard 
              icon="🔞"
              title="Age Verification"
              desc="Built-in 18+ gate compliant with international standards. Protect your business."
            />
            <FeatureCard 
              icon="📊"
              title="Basic Analytics"
              desc="Track clicks, views, and unlocking rate. Know what content converts."
            />
             <FeatureCard 
              icon="🚀"
              title="Instant Setup"
              desc="No coding needed. Drag, drop, and launch your site in under 5 minutes."
            />
          </div>
        ) : (
          <div style={styles.grid}>
             <FeatureCard 
              icon="🤖"
              title="AI Chatbots"
              desc="Auto-reply to DMs, flirt with fans, and upsell content while you sleep."
              isPro
            />
             <FeatureCard 
              icon="💌"
              title="Email CRM"
              desc="Collect fan emails and send targeted blasts for new content drops."
              isPro
            />
             <FeatureCard 
              icon="🛒"
              title="Merch Store"
              desc="Sell physical goods or digital downloads directly from your page."
              isPro
            />
             <FeatureCard 
              icon="🔄"
              title="OnlyFans Sync"
              desc="Automatically pull your latest OF posts to tease on your site."
              isPro
            />
          </div>
        )}
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, desc, isPro }) => (
  <div style={{...styles.card, borderColor: isPro ? 'var(--neon-purple)' : 'rgba(255,255,255,0.1)'}}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
    {isPro && <span style={styles.proBadge}>Waitlist Only</span>}
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
    marginBottom: '4rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  tabs: {
    display: 'inline-flex',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '30px',
    padding: '0.5rem',
    gap: '0.5rem',
  },
  tab: {
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.2s',
  },
  activeTab: {
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    color: '#000',
    backgroundColor: 'var(--neon-green)',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 10px rgba(57, 255, 20, 0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  proBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    fontSize: '0.7rem',
    padding: '0.2rem 0.6rem',
    borderRadius: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
}

export default Features
