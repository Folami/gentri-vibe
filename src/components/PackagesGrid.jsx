import { Link } from 'react-router-dom'
import './PackagesGrid.css'
import './ServicesGrid.css'
import './Shared.css'
import '../index.css'

const PackagesGrid = () => {
  const packages = [
    {
      name: 'Blue Starter',
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
      cta: 'Get Started',
      colorClass: 'blue'
    },
    {
      name: 'Pink Pro',
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
      popular: true,
      colorClass: 'pink'
    },
    {
      name: 'Yellow E-Commerce',
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
      cta: 'Launch Store',
      colorClass: 'yellow'
    },
    {
      name: 'Orange Add-Ons',
      price: 'From ₦15k/mo',
      description:' Enhance any package with premium services',
      features: [
        'AI Chatbots (₦20k/mo)',
        'Blockchain Integration (₦30k)',
        'Website Maintenance (₦15k/mo)',
        'Creator Tools (₦15-25k/mo)',
        'SEO Boost (₦25k/mo)',
        'Custom features'
      ],
      link: '/packages/orange-addons',
      cta: 'Explore Add-Ons',
      colorClass: 'orange'
    }
  ]

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <div className="section__header">
          <span className="section-number section-number--pink">04</span>
          <h2 className="section-title">Our Packages</h2>
          <p className="section-subtitle">
            Flexible tiers that grow with you—from MVP to empire 🎯
          </p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="packages__footer">
          <p>Need a custom solution? <Link to="/contact" className="packages__contact-link">Let's talk →</Link></p>
        </div>
      </div>
    </section>
  )
}

const PackageCard = ({ name, price, description, features, link, cta, popular, colorClass }) => (
  <article className={`package-card package-card--${colorClass}`}>
    {popular && <div className="package-card__badge">Most Popular</div>}
    <div className="package-card__bar"></div>
    
    <h3 className="package-card__name">{name}</h3>
    <div className="package-card__price">{price}</div>
    <p className="package-card__description">{description}</p>

    <ul className="package-card__features">
      {features.map((feature, i) => (
        <li key={i}>
          <span className="package-card__check">✓</span>
          {feature}
        </li>
      ))}
    </ul>

    <Link to={link}>
      <button className="package-card__cta">
        {cta}
      </button>
    </Link>
  </article>
)

export default PackagesGrid
