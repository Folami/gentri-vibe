import { Link } from 'react-router-dom'
import '../index.css'

const ServicesGrid = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom, mobile-first websites that scale with your business. Built for speed, security, and success.',
      link: '/services/web-development'
    },
    {
      icon: '🎨',
      title: 'Branding & Design',
      description: 'Bold visual identities that make you unforgettable. Logos, color systems, and brand guidelines.',
      link: '/services/branding'
    },
    {
      icon: '📝',
      title: 'Content Creation',
      description: 'Engaging content that speaks your brand voice. From social posts to SEO-optimized blogs.',
      link: '/services/content'
    },
    {
      icon: '📊',
      title: 'SEO & Marketing',
      description: 'Get found by the right people. Technical audits, keyword strategy, and visibility that converts.',
      link: '/services/seo'
    },
    {
      icon: '⚡',
      title: 'Digital Transformation',
      description: 'Migrate to automated ecosystems. CRM integrations, workflows, and tools that save time.',
      link: '/services/transformation'
    },
    {
      icon: '🤖',
      title: 'AI Products & Services',
      description: 'Smart chatbots, personalization engines, and AI tools that work 24/7 for your business.',
      link: '/services/ai'
    },
    {
      icon: '⛓️',
      title: 'Blockchain Integrations',
      description: 'NFT minting, secure loyalty programs, and Web3 solutions for forward-thinking brands.',
      link: '/services/blockchain'
    },
    {
      icon: '🔧',
      title: 'Website Maintenance',
      description: 'Keep your site fast, secure, and updated. Monthly plans starting at ₦15k.',
      link: '/services/maintenance'
    }
  ]

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>01</span>
          <h2 style={styles.title}>What We Do</h2>
          <p style={styles.subtitle}>
            End-to-end digital services that turn bold ideas into thriving businesses 💡
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description, link }) => (
  <div style={styles.card}>
    <div style={styles.iconWrapper}>
      <span style={styles.icon}>{icon}</span>
    </div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{description}</p>
    <Link to={link} style={styles.detailsLink}>
      See Details →
    </Link>
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
    color: 'var(--neon-purple)',
    backgroundColor: 'rgba(176, 38, 255, 0.1)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    marginBottom: '1rem',
    border: '1px solid rgba(176, 38, 255, 0.3)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all var(--transition-smooth)',
    cursor: 'pointer',
  },
  iconWrapper: {
    marginBottom: '1.5rem',
  },
  icon: {
    fontSize: '3rem',
    display: 'block',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  cardDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  detailsLink: {
    color: 'var(--neon-green)',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'gap var(--transition-fast)',
  }
}

export default ServicesGrid
