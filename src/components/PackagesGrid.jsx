import { Link } from 'react-router-dom'
import '../index.css'

const PackagesGrid = () => {
  const packages = [
    {
      name: 'Blue Starter',
      color: 'var(--blue-package)',
      price: '₦50,000',
      description: 'Perfect for creators & small businesses getting started',
      features: [
        '1-3 pages',
        'Basic SEO setup',
        'Contact form',
        '1 revision',
        'Mobile responsive',
        '1-2 weeks delivery'
      ],
      link: '/packages/blue-starter',
      cta: 'Get Started'
    },
    {
      name: 'Pink Pro',
      color: 'var(--pink-package)',
      price: '₦100,000',
      description: 'For growing businesses ready to scale',
      features: [
        '5-7 pages',
        'Custom branding',
        'AI chatbot basics',
        '2 revisions',
        'SEO optimization',
        'Analytics setup',
        '2-3 weeks delivery'
      ],
      link: '/packages/pink-pro',
      cta: 'Go Pro',
      popular: true
    },
    {
      name: 'Yellow E-Commerce',
      color: 'var(--yellow-package)',
      price: '₦150,000+',
      description: 'Full-featured online stores with advanced integrations',
      features: [
        'Up to 10 pages',
        'Shopify/WooCommerce',
        'Payment gateway',
        'Blockchain options',
        'Product training',
        '3 revisions',
        '3-4 weeks delivery'
      ],
      link: '/packages/yellow-ecommerce',
      cta: 'Launch Store'
    },
    {
      name: 'Orange Add-Ons',
      color: 'var(--orange-addon)',
      price: 'From ₦15k/mo',
      description: 'Enhance any package with premium services',
      features: [
        'AI Chatbots (₦20k/mo)',
        'Blockchain Integration (₦30k)',
        'Website Maintenance (₦15k/mo)',
        'Creator Tools (₦15-25k/mo)',
        'SEO Boost (₦25k/mo)',
        'Custom features'
      ],
      link: '/packages/orange-addons',
      cta: 'Explore Add-Ons'
    }
  ]

  return (
    <section id="packages" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.sectionNumber}>04</span>
          <h2 style={styles.title}>Our Packages</h2>
          <p style={styles.subtitle}>
            Flexible tiers that grow with you—from MVP to empire 🎯
          </p>
        </div>

        <div style={styles.grid}>
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        <div style={styles.footer}>
          <p>Need a custom solution? <Link to="/contact" style={styles.contactLink}>Let's talk →</Link></p>
        </div>
      </div>
    </section>
  )
}

const PackageCard = ({ name, color, price, description, features, link, cta, popular }) => (
  <div style={{...styles.card, borderColor: color}}>
    {popular && <div style={styles.popularBadge}>Most Popular</div>}
    <div style={{...styles.colorBar, backgroundColor: color}}></div>
    
    <h3 style={{...styles.packageName, color}}>{name}</h3>
    <div style={styles.priceBlock}>
      <span style={styles.price}>{price}</span>
    </div>
    <p style={styles.description}>{description}</p>

    <ul style={styles.features}>
      {features.map((feature, i) => (
        <li key={i} style={styles.feature}>
          <span style={{...styles.check, color}}>✓</span>
          {feature}
        </li>
      ))}
    </ul>

    <Link to={link}>
      <button style={{...styles.ctaBtn, backgroundColor: color}}>
        {cta}
      </button>
    </Link>
  </div>
)

const styles = {
  section: {
    padding: '6rem 1rem',
    backgroundColor: 'rgba(57, 255, 20, 0.02)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
    color: 'var(--neon-pink)',
    backgroundColor: 'rgba(255, 0, 255, 0.1)',
    padding: '0.5rem 1.5rem',
    borderRadius: '30px',
    marginBottom: '1rem',
    border: '1px solid rgba(255, 0, 255, 0.3)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '2px solid',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform var(--transition-smooth)',
  },
  popularBadge: {
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
  colorBar: {
    height: '4px',
    width: '60px',
    borderRadius: '2px',
    marginBottom: '1.5rem',
  },
  packageName: {
    fontSize: '1.8rem',
    fontWeight: '800',
    marginBottom: '1rem',
  },
  priceBlock: {
    marginBottom: '1rem',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: '800',
  },
  description: {
    color: 'var(--text-muted)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  features: {
    listStyle: 'none',
    marginBottom: '2rem',
    flex: 1,
  },
  feature: {
    marginBottom: '0.8rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    fontSize: '0.95rem',
  },
  check: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  ctaBtn: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform var(--transition-fast)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '1.1rem',
  },
  contactLink: {
    color: 'var(--neon-green)',
    fontWeight: '700',
    textDecoration: 'none',
  }
}

export default PackagesGrid
