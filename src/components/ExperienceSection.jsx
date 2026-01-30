import '../index.css'

const ExperienceSection = () => {
  const testimonials = [
    {
      avatar: '👨‍💼',
      name: 'Chidi O.',
      role: 'E-commerce Founder',
      quote: 'Doubled our revenue in 3 months! The e-commerce setup was seamless. 📈',
      stat: '+120% Revenue'
    },
    {
      avatar: '🎤',
      name: 'Ayo T.',
      role: 'Afrobeats Artist',
      quote: 'My fans love the paywalled teasers. Engagement through the roof! 🔥',
      stat: '+300% Fan Engagement'
    },
    {
      avatar: '👩‍💻',
      name: 'Ngozi K.',
      role: 'Tech Startup',
      quote: 'From idea to launch in 4 weeks. The AI chatbot is a game-changer!',
      stat: '24/7 Support Automation'
    }
  ]

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>05</span>
          <h2 style={styles.title}>Experience & Testimonials</h2>
          <p style={styles.subtitle}>
            Real stories from real partners 💼
          </p>
        </div>

        {/* Testimonials */}
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.avatar}>{testimonial.avatar}</div>
              <p style={styles.quote}>"{testimonial.quote}"</p>
              <div style={styles.author}>
                <strong>{testimonial.name}</strong>
                <span style={styles.role}>{testimonial.role}</span>
              </div>
              <div style={styles.stat}>{testimonial.stat}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div style={styles.clientsSection}>
          <h3 style={styles.clientsTitle}>Trusted by bold brands</h3>
          <div style={styles.logosGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={styles.logoPlaceholder}>
                <span>Client {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Tease */}
        <div style={styles.caseStudies}>
          <h3 style={styles.caseStudiesTitle}>Featured Case Studies</h3>
          <div style={styles.caseGrid}>
            <CaseStudyCard 
              title="E-Commerce Revolution"
              description="How we helped a Lagos-based fashion brand scale from ₦0 to ₦5M/month"
              tag="E-Commerce"
            />
            <CaseStudyCard 
              title="AI-Powered Support"
              description="Reduced customer service costs by 60% with custom chatbots"
              tag="AI Products"
            />
            <CaseStudyCard 
              title="Blockchain Loyalty"
              description="Built an NFT-based rewards program for a creator community"
              tag="Blockchain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudyCard = ({ title, description, tag }) => (
  <div style={styles.caseCard}>
    <span style={styles.caseTag}>{tag}</span>
    <h4 style={styles.caseTitle}>{title}</h4>
    <p style={styles.caseDesc}>{description}</p>
    <a href="#" style={styles.caseLink}>Read More →</a>
  </div>
)

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
    color: 'var(--neutral-green)',
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    marginBottom: '1rem',
    border: '1px solid rgba(46, 204, 113, 0.3)',
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
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '5rem',
  },
  testimonialCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  avatar: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
  },
  quote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#ddd',
    marginBottom: '1.5rem',
    lineHeight: '1.7',
  },
  author: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    marginBottom: '1rem',
  },
  role: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
  },
  stat: {
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    color: 'var(--neon-green)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    display: 'inline-block',
  },
  clientsSection: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  clientsTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'var(--text-muted)',
  },
  logosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  logoPlaceholder: {
    height: '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px dashed rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
  caseStudies: {
    
  },
  caseStudiesTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '3rem',
    fontWeight: '700',
  },
  caseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  caseCard: {
    backgroundColor: 'rgba(176, 38, 255, 0.05)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(176, 38, 255, 0.2)',
  },
  caseTag: {
    display: 'inline-block',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '0.3rem 0.8rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  caseTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.8rem',
    fontWeight: '700',
  },
  caseDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  caseLink: {
    color: 'var(--neon-green)',
    fontWeight: '600',
    textDecoration: 'none',
  }
}

export default ExperienceSection
