import React from 'react'
import { Link } from 'react-router-dom'
import { whatWeDoData } from '../../data/pages/whatWeDoData'
import './Services.css'

const Services = () => {
  const whatWeDo = whatWeDoData
  const serviceCategories = [
    {
      title: "SME Portals",
      desc: "For startups and growing businesses. Get a professional website, AI tools, and a digital footprint that scales.",
      link: "/services/sme-portals",
      icon: "🚀",
      colorClass: "card-blue"
    },
    {
      title: "E-Commerce Portals",
      desc: "For online retailers. Secure payments, inventory management, and blockchain loyalty systems.",
      link: "/services/e-commerce-portals",
      icon: "🛒",
      colorClass: "card-green"
    },
    {
      title: "Creator Portals",
      desc: "For artists and influencers. Monetize your vibe with paywalls, merch stores, and fan hubs.",
      link: "/services/content-creator-portals",
      icon: "🎤",
      colorClass: "card-purple"
    }
  ]

  return (
    <div className="page-container fade-in services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="text-gradient">Our Service Universes 🌌</h1>
          <p className="services-subtitle">Choose your portal to digital excellence.</p>
        </div>
      </section>

      <section className="section container">
        <div className="services-hub-grid">
          {serviceCategories.map((cat, index) => (
            <Link key={index} to={cat.link} className={`hub-card ${cat.colorClass}`}>
              <div className="hub-icon">{cat.icon}</div>
              <h2 className="hub-title">{cat.title}</h2>
              <p className="hub-desc">{cat.desc}</p>
              <span className="hub-link-text">Enter Portal →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section-title">{whatWeDo.title}</h2>
            <p className="section-subtitle">{whatWeDo.subtitle}</p>
          </div>
          
          <div className="wwd-grid">
            {whatWeDo.items.map((item, index) => (
              <div key={index} className="wwd-card">
                <div className="wwd-icon">{item.icon}</div>
                <h3 className="wwd-title">{item.title}</h3>
                <p className="wwd-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
