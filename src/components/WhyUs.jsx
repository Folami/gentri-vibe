import '../index.css'

const WhyUs = () => {
  const reasons = [
    {
      icon: '💡',
      title: 'Innovation-First',
      description: 'We don\'t just follow trends—we create them. AI, blockchain, and cutting-edge tech are our playground.'
    },
    {
      icon: '📈',
      title: 'Results-Oriented',
      description: 'Your success is our KPI. We build solutions that drive measurable growth, not just pretty designs.'
    },
    {
      icon: '♻️',
      title: 'Ethical & Sustainable',
      description: 'Long-term partnerships over quick wins. We build ecosystems that scale responsibly.'
    },
    {
      icon: '🤝',
      title: 'Personal Partnership',
      description: 'Family-run honesty meets enterprise-level delivery. You\'re not a ticket number—you\'re a partner.'
    }
  ]

  return (
    <section id="why-us" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>02</span>
          <h2 style={styles.title}>Why Choose Us</h2>
          <p style={styles.subtitle}>
            Real partnerships for real growth 🌱
          </p>
        </div>

        <div style={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconCircle}>
                <span style={styles.icon}>{reason.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{reason.title}</h3>
              <p style={styles.cardDesc}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '6rem 1rem',
    backgroundColor: 'rgba(176, 38, 255, 0.03)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionNumber: {
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--neon-green)',
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    marginBottom: '1rem',
    border: '1px solid rgba(57, 255, 20, 0.3)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    textAlign: 'center',
    padding: '2rem',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-card)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
  },
  icon: {
    fontSize: '2.5rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  cardDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
  }
}

export default WhyUs
