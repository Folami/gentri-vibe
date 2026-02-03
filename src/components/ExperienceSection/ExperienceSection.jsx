import React from 'react'
import { testimonialsData } from '../../data/components/testimonialsData'
import './ExperienceSection.css'

const ExperienceSection = () => {
  const { title, items } = testimonialsData

  return (
    <section className="section container experience-section">
      <h2 className="experience__title">{title}</h2>
      
      <div className="experience__grid">
        {items.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial__quote">"{t.quote}"</p>
            <div className="testimonial__footer">
              <div>
                <strong className="testimonial__author">{t.name}</strong>
                <span className="testimonial__role">{t.role}</span>
              </div>
              <span className="testimonial__stat">
                {t.stat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
