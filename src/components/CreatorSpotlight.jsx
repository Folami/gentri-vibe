import '../index.css'

const CreatorSpotlight = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Wall of Fame 🏆</h2>
        <div style={styles.carousel}>
          <div style={styles.card}>
            <div style={styles.avatar}>👩‍🎤</div>
            <p style={styles.quote}>"Doubled my Telegram subs in a week. The auto-DM feature is a money printer."</p>
            <p style={styles.author}>@SarahVibes</p>
            <div style={styles.stat}>+₦450k last month</div>
          </div>
           <div style={styles.card}>
            <div style={styles.avatar}>😈</div>
            <p style={styles.quote}>"Finally a site that looks professional. My fans trust the paywall now."</p>
            <p style={styles.author}>@RoxyX</p>
             <div style={styles.stat}>+₦820k last month</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '6rem 1rem',
    backgroundColor: 'rgba(176, 38, 255, 0.05)', // slight purple tint
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
  },
  carousel: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    background: 'var(--bg-dark)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '400px',
    textAlign: 'left',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  avatar: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  quote: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    color: '#ddd',
  },
  author: {
    fontWeight: 'bold',
    color: 'var(--neon-green)',
    marginBottom: '0.5rem',
  },
  stat: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }
}

export default CreatorSpotlight
