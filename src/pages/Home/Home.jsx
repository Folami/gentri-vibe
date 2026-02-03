import React from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection'
import { homeData } from '../../data/pages/homeData'
import './Home.css'

// Simplified Teaser Component
const Teaser = ({ title, desc, link, linkText }) => (
  <div className="teaser-card">
    <h3 className="teaser-card__title">{title}</h3>
    <p className="teaser-card__desc">{desc}</p>
    <Link to={link} className="btn btn-outline">
      {linkText} →
    </Link>
  </div>
)

const Home = () => {
  const { processTeaser, servicesTeaser, aboutTeaser } = homeData

  return (
    <div className="home-page fade-in">
      {/* 1. Hero Banner (Maintained) */}
      <HeroBanner />

      {/* 2. Process Teaser */}
      <section className="section container home__process">
        <div className="home__heading-group">
          <h2 className="home__title">{processTeaser.title}</h2>
          <p className="home__subtitle">{processTeaser.subtitle}</p>
        </div>
        
        <Teaser 
          title={processTeaser.card.title}
          desc={processTeaser.card.desc}
          link={processTeaser.card.link}
          linkText={processTeaser.card.linkText}
        />
      </section>

      {/* 3. Services Teaser Grid */}
      <section className="home__services">
        <div className="container">
          <h2 className="home__services-title">{servicesTeaser.title}</h2>
          <div className="home__grid">
            {servicesTeaser.cards.map((card, index) => (
              <Teaser 
                key={index}
                title={card.title}
                desc={card.desc}
                link={card.link}
                linkText={card.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Teaser */}
      <section className="section container home__about">
        <h2 className="home__about-title">{aboutTeaser.title}</h2>
        <p className="home__about-desc">
          {aboutTeaser.desc}
        </p>
        <Link to={aboutTeaser.ctaLink} className="btn btn-primary">
          {aboutTeaser.ctaText}
        </Link>
      </section>

      {/* 5. Testimonials (Maintained) */}
      <ExperienceSection />
    </div>
  )
}

export default Home
