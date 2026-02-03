import React from 'react'
import { howWeWorkData } from '../../data/pages/howWeWorkData'
import './HowWeGentriVibe.css'

const HowWeGentriVibe = () => {
  const { hero, steps, cta } = howWeWorkData

  return (
    <div className="page-container fade-in how-we-work-page">
      {/* Hero Section */}
      <section className="section hww__hero">
        <h1 className="text-gradient hww__hero-title">{hero.title}</h1>
        <p className="hww__hero-desc">
          We blend <span className='text-grade-1'>AI magic</span>
          , <span className='text-grade-2'>blockchain security</span>
          , and <span className='text-grade-3'>creative vibes</span>
          &nbsp;to elevate your brand.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="section container hww__steps">
        <div className="hww__grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <span className="step-card__number">
                {step.id}
              </span>
              <div className="step-card__icon">{step.icon}</div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section hww__cta">
        <h2 className="hww__cta-title">{cta.title}</h2>
        <button className="btn btn-primary" onClick={() => document.querySelector('.navbar__link[href="#"]').click()}>
          {cta.buttonText}
        </button>
      </section>
    </div>
  )
}

export default HowWeGentriVibe
