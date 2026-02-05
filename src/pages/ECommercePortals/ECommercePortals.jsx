import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { portalData } from '../../data/pages/portalData'
import SubscriptionModal from '../../components/SubscriptionModal/SubscriptionModal'
import './ECommercePortals.css'

const ECommercePortals = () => {
  const { hero, tiers, cta } = portalData.ecommerce
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState(null)
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly')

  const openModal = (tier) => {
    setSelectedTier(tier)
    setModalOpen(true)
  }

  return (
    <div className="page-container fade-in ecom-portals-page">
      <SubscriptionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedTier={selectedTier}
        initialPeriod={selectedPeriod}
      />

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
          
          <div className="period-selector" style={{ maxWidth: '400px', margin: '0 auto 3rem auto' }}>
            {['quarterly', 'biannually', 'yearly'].map((p) => (
              <label key={p} className={`period-option ${selectedPeriod === p ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="period" 
                  value={p} 
                  checked={selectedPeriod === p}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                />
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </label>
            ))}
          </div>

          <div className="tiers-grid">
            {tiers.map((tier, i) => (
              <div key={i} className={`tier-card ${tier.isPopular ? 'tier-card--popular' : ''}`}>
                {tier.isPopular && <span className="tier-tag">Top Choice</span>}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price">
                  {tier.pricing[selectedPeriod].monthlyEquivalent} <span className="tier-period">/month</span>
                </div>
                <p className="billing-cycle-note">
                  Billed as {tier.pricing[selectedPeriod].price} {tier.pricing[selectedPeriod].period}
                </p>
                <ul className="tier-features">
                  {tier.features.map((f, idx) => (
                    <li key={idx}><span>✓</span> {f}</li>
                  ))}
                </ul>
                <button 
                  className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-outline'} tier-btn`}
                  onClick={() => openModal(tier)}
                >
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portal-cta section container">
        <h2>{cta.title}</h2>
        {/* <Link to={cta.link} className="btn btn-primary">
          {cta.buttonText}
        </Link> */}
      </section>
    </div>
  )
}

export default ECommercePortals
