import '../index.css'

const TeaserPreview = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why top creators replace Linktree.</h2>
      <div style={styles.grid}>
        <div style={styles.feature}>
          <div style={styles.icon}>🔒</div>
          <h3>Paywalled Galleries</h3>
          <p>Don't give it away. Tease content and lock the rest behind a paywall.</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.icon}>🤖</div>
          <h3>Auto-DM Bots</h3>
          <p>Capture leads and let the bot do the flirting & selling 24/7.</p>
        </div>
        <div style={styles.feature}>
          <div style={styles.icon}>⚡</div>
          <h3>Instant Deploy</h3>
          <p>Get your custom .com site live in under 60 seconds.</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  feature: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.2s',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
}

export default TeaserPreview
