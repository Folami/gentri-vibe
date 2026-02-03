import { Link } from 'react-router-dom'
import './ServicesGrid.css'
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
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-number section-number--purple">01</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            End-to-end digital services that turn bold ideas into thriving businesses 💡
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description, link }) => (
  <article className="service-card">
    <div className="service-card__icon-wrapper">
      <span className="service-card__icon" role="img" aria-label={title}>{icon}</span>
    </div>
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__description">{description}</p>
    <Link to={link} className="service-card__link">
      See Details →
    </Link>
  </article>
)

export default ServicesGrid
