import React from 'react'
import { aboutData } from '../../data/pages/aboutData'
import './AboutUs.css'

const AboutUs = () => {
  const { hero, stats, mission } = aboutData

  return (
    <div className="page-container fade-in about-us-page">
      <section className="container audit__hero-container">
        {/* Text Content */}
        <div>
          <h1 className="text-gradient about__title" dangerouslySetInnerHTML={{ __html: hero.title.replace('\n', '<br />') }} />
          
          <p className="about__desc" dangerouslySetInnerHTML={{ __html: hero.desc }} />
          
          <p className="about__sub-desc">
            {hero.subDesc}
          </p>
          
          <div className="about__stats">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="stat-item__value" style={{ color: stat.color }}>{stat.value}</h3>
                <span className="stat-item__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual/Image Placeholder */}
        <div className="about__visual">
          <span className="about__visual-icon">🇳🇬</span>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission">
        <div className="container">
          <h2 className="about__mission-title">{mission.title}</h2>
          <p className="about__mission-desc" dangerouslySetInnerHTML={{ 
            __html: mission.desc.replace('<span style={{ color: \'var(--accent-blue)\' }}>', '<span style="color: var(--accent-blue)">') 
          }} />
        </div>
      </section>
    </div>
  )
}

export default AboutUs
