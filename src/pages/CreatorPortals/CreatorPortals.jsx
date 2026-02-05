import React, { useState } from 'react'
import { creatorPortalsData } from '../../data/pages/creatorPortalsData'
import SubscriptionModal from '../../components/SubscriptionModal/SubscriptionModal'
import './CreatorPortals.css'

const CreatorPortals = () => {
  const { hero, perfectFor, features, tiers, cta } = creatorPortalsData
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState(null)
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly')

  const openModal = (tier) => {
    setSelectedTier(tier)
    setModalOpen(true)
  }

  return (
    <div className="page-container fade-in creator-portals-page">
      <SubscriptionModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedTier={selectedTier}
        initialPeriod={selectedPeriod}
      />

      {/* Hero Section */}
      <section className="cp__hero">
        <div className="container">
          
          {/* Title & Description FIRST (Reordered for layout consistency) */}
          <h1 className="text-gradient cp__hero-title" dangerouslySetInnerHTML={{ __html: hero.title.replace('\n', '<br/>') }} />
          
          <p className="cp__hero-desc">
            {hero.desc.split(hero.highlightWord).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span style={{ color: 'var(--accent-blue)' }}>{hero.highlightWord}</span>}
              </React.Fragment>
            ))}
          </p>

          {/* Three Icons Row (Now BELOW Title) */}
          <div className="cp__hero-icons">
            {hero.icons.map((item, idx) => (
              <div key={idx} className="cp__icon-wrapper">
                <div className="cp__icon-circle">
                  {item.icon}
                </div>
                <span className="cp__icon-text">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Perfect For Section */}
      <section className="cp__perfect">
        <div className="container text-center">
          <h2 style={{ marginBottom: '3rem' }}>Perfect For...</h2>
          <div className="cp__grid">
            {perfectFor.map((item, i) => (
              <div key={i} className="perfect-card">
                <h3 className="perfect-card__title">{item.title}</h3>
                <p className="perfect-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="cp__tiers">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Choose Your Tier</h2>
          
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
                {tier.isPopular && (
                  <span className="tier-tag">Most Popular</span>
                )}
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                  {tier.pricing[selectedPeriod].monthlyEquivalent} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/month</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Billed as {tier.pricing[selectedPeriod].price} {tier.pricing[selectedPeriod].period}
                </p>
                <ul style={{ marginBottom: '2rem', textAlign: 'left' }}>
                  {tier.features.map((f, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-green)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                  onClick={() => openModal(tier)}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Grid */}
      <section className="cp__features container">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>What You Get</h2>
        <div className="cp__grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${index % 2 === 0 ? 'feature-card--even' : 'feature-card--odd'}`}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cp__cta">
        <h2 style={{ marginBottom: '1.5rem' }}>{cta.title}</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          {cta.desc}
        </p>
        {/* <button className="btn btn-primary" onClick={() => document.querySelector('.cp__tiers').scrollIntoView({ behavior: 'smooth' })}>
          {cta.buttonText}
        </button> */}
      </section>
    </div>
  )
}

export default CreatorPortals
