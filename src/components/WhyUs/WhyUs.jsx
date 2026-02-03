import React from 'react'
import { whyUsData } from '../../data/components/whyUsData'
import './WhyUs.css'

const WhyUs = () => {
  const { sectionNumber, title, subtitle, reasons } = whyUsData

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="why-us-header">
          <span className="why-us-number">{sectionNumber}</span>
          <h2 className="why-us-title">{title}</h2>
          <p className="why-us-subtitle">{subtitle}</p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <article key={index} className="why-us-card">
              <div className="why-us-icon-wrapper">
                <span className="why-us-icon" role="img" aria-label={reason.title}>{reason.icon}</span>
              </div>
              <h3 className="why-us-card-title">{reason.title}</h3>
              <p className="why-us-card-desc">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
