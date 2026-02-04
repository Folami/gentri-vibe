import { Link } from 'react-router-dom'
import '../index.css'

const Pricing = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Simple pricing that pays for itself.</h1>
        <p style={styles.subtitle}>
          Most creators make their money back with just 2-3 extra subscribers.
        </p>
      </div>

      <div style={styles.grid}>
        <PricingCard 
          tier="Basic"
          price="₦15,000"
          period="/month"
          features={[
            "Custom .com domain",
            "Unlimited Photo Galleries",
            "Basic Analytics",
            "Age Verification Gate",
            "Telegram Link Integration"
          ]}
          cta="Start Free Trial"
          link="/signup"
        />
        <PricingCard 
          tier="Pro"
          price="₦25,000"
          period="/month"
          features={[
            "Everything in Basic",
            "AI Chatbots (Auto-DM)",
            "Priority Support",
            "Email Collection & CRM",
            "Zero Transaction Fees"
          ]}
          cta="Join Waitlist"
          link="/signup"
          isPro
        />
      </div>

      <div style={styles.comparison}>
        <h3 style={styles.compTitle}>Feature Comparison</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>Basic</th>
              <th style={styles.th}>Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tr}>
              <td style={styles.td}>Custom Domain</td>
              <td style={styles.td}>✅</td>
              <td style={styles.td}>✅</td>
            </tr>
             <tr style={styles.tr}>
              <td style={styles.td}>Hosting & SSL</td>
              <td style={styles.td}>✅</td>
              <td style={styles.td}>✅</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>AI Bot Integration</td>
              <td style={styles.td}>❌</td>
              <td style={styles.td}>✅</td>
            </tr>
            <tr style={styles.tr}>
              <td style={styles.td}>Transaction Fee</td>
              <td style={styles.td}>2%</td>
              <td style={styles.td}>0%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const PricingCard = ({ tier, price, period, features, cta, link, isPro }) => (
  <div style={{...styles.card, borderColor: isPro ? 'var(--neon-purple)' : 'rgba(255,255,255,0.1)', transform: isPro ? 'scale(1.05)' : 'none'}}>
    {isPro && <div style={styles.badge}>Most Popular</div>}
    <h3 style={styles.tier}>{tier}</h3>
    <div style={styles.priceBlock}>
      <span style={styles.price}>{price}</span>
      <span style={styles.period}>{period}</span>
    </div>
    <ul style={styles.features}>
      {features.map((f, i) => (
        <li key={i} style={styles.feature}>
          <span style={styles.check}>✓</span> {f}
        </li>
      ))}
    </ul>
    <Link to={link}>
      <button style={isPro ? styles.proBtn : styles.basicBtn}>{cta}</button>
    </Link>
  </div>
)

const styles = {
  page: {
    padding: '4rem 1rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.2rem',
  },
  grid: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5rem',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid',
    width: '100%',
    maxWidth: '350px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  tier: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: 'var(--text-muted)',
  },
  priceBlock: {
    marginBottom: '2rem',
  },
  price: {
    fontSize: '3rem',
    fontWeight: '800',
  },
  period: {
    color: 'var(--text-muted)',
  },
  features: {
    listStyle: 'none',
    marginBottom: '2.5rem',
    flex: 1,
  },
  feature: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  check: {
    color: 'var(--neon-green)',
    fontWeight: 'bold',
  },
  basicBtn: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  proBtn: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.4)',
  },
  comparison: {
     marginTop: '2rem',
  },
  compTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'var(--text-muted)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-muted)',
  },
  td: {
    padding: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  tr: {
    
  }
}

export default Pricing
