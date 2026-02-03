import React from 'react'
import { Link } from 'react-router-dom'
import { portalData } from '../../data/pages/portalData'
import './ECommercePortals.css'

const ECommercePortals = () => {
  const { hero, tiers, cta } = portalData.ecommerce

  return (
    <div className="page-container fade-in ecom-portals-page">
      {/* Hero */}
      <section className="portal-hero">
        <div className="container">
          <h1 className="text-gradient portal-hero__title">{hero.title}</h1>
          <p className="portal-hero__subtitle">{hero.subtitle}</p>
          <p className="portal-hero__desc">{hero.desc}</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="portal-tiers section">
        <div className="container">
          <h2 className="section-title text-center">Build Your Empire</h2>
          <div className="tiers-grid">
            {tiers.map((tier, i) => (
              <div key={i} className={`tier-card ${tier.isPopular ? 'tier-card--popular' : ''}`}>
                {tier.isPopular && <span className="tier-tag">Top Choice</span>}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price">
                  {tier.price} <span className="tier-period">/{tier.period}</span>
                </div>
                <ul className="tier-features">
                  {tier.features.map((f, idx) => (
                    <li key={idx}><span>✓</span> {f}</li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-outline'} tier-btn`}>
                    Select {tier.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portal-cta section container">
        <h2>{cta.title}</h2>
        <Link to={cta.link} className="btn btn-primary">
          {cta.buttonText}
        </Link>
      </section>
    </div>
  )
}

export default ECommercePortals
