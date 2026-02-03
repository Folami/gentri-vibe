import React from 'react'
import './ServiceTemplate.css'

const ServiceTemplate = ({ title, price, description, features, ctaText = "Get Started", icon }) => {
  return (
    <div className="page-container fade-in">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__icon">{icon}</div>
          <h1 className="text-gradient service-hero__title">{title}</h1>
          <p className="service-hero__desc">{description}</p>
          
          <div className="service-hero__price-box">
            <span className="service-hero__price-label">Starting Investment</span>
            <span className="service-hero__price-value">{price}</span>
          </div>
        </div>
      </section>

      <section className="section container service__included">
        <h2 className="service__included-title">What's Included?</h2>
        <div className="service__grid">
          {features.map((feature, index) => (
            <div key={index} className="service__feature-card">
              <span className="service__feature-check">✓</span>
              <span className="service__feature-text">{feature}</span>
            </div>
          ))}
        </div>

        <div className="service__cta-container">
          <button 
            className="btn btn-primary service__cta-btn"
            onClick={() => document.querySelector('.navbar__link[href="#"]').click()}
          >
            {ctaText}
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServiceTemplate
