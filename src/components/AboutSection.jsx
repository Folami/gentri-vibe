import '../index.css'

const AboutSection = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>03</span>
          <h2 style={styles.title}>About Us</h2>
        </div>

        <div style={styles.content}>
          <div style={styles.textBlock}>
            <p style={styles.lead}>
              We're a <strong>dynamic digital agency</strong> on a mission to empower Nigerian 
              and African businesses with <strong>global-class technology</strong>.
            </p>
            
            <p style={styles.paragraph}>
              Born from the belief that innovation should be accessible to everyone, 
              GentriVibe bridges the gap between cutting-edge tech (AI, blockchain, automation) 
              and the bold businesses & creators shaping Africa's digital future.
            </p>

            <p style={styles.paragraph}>
              We're not your typical agency. We're a <strong>partnership-driven team</strong> 
              that combines family-run honesty with enterprise-level delivery. Every project 
              is a collaboration—your vision, our expertise, unstoppable results.
            </p>

            <div style={styles.highlights}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Years Experience</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Projects Delivered</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>100%</span>
                <span style={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>

            <blockquote style={styles.quote}>
              "Our mission: Build sustainable digital ecosystems that drive 
              <strong> long-term growth</strong>, not just quick wins."
            </blockquote>
          </div>

          <div style={styles.imageBlock}>
            <div style={styles.placeholder}>
              <span style={styles.placeholderIcon}>🚀</span>
              <p style={styles.placeholderText}>
                Innovation <br /> Meets <br /> Partnership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '6rem 1rem',
    backgroundColor: 'var(--bg-dark)',
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
    color: 'var(--neutral-blue)',
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    marginBottom: '1rem',
    border: '1px solid rgba(74, 144, 226, 0.3)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  textBlock: {
    
  },
  lead: {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    color: 'var(--text-main)',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
  },
  highlights: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    margin: '3rem 0',
    padding: '2rem 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--neon-green)',
    marginBottom: '0.5rem',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
  },
  quote: {
    borderLeft: '4px solid var(--neon-purple)',
    paddingLeft: '1.5rem',
    fontStyle: 'italic',
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginTop: '2rem',
  },
  imageBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: '100%',
    maxWidth: '400px',
    height: '400px',
    backgroundColor: 'var(--bg-card)',
    border: '2px dashed rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  placeholderIcon: {
    fontSize: '4rem',
  },
  placeholderText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: '1.5',
    background: 'linear-gradient(135deg, var(--neon-purple) 0%, var(--neon-green) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }
}

export default AboutSection
