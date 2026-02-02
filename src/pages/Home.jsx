import React from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ExperienceSection from '../components/ExperienceSection'

// Simplified Teaser Component
const Teaser = ({ title, desc, link, linkText }) => (
  <div style={{ 
    padding: '3rem', 
    backgroundColor: 'var(--bg-secondary)', 
    borderRadius: 'var(--radius-xl)',
    border: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center'
  }}>
    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>{desc}</p>
    <Link to={link} className="btn btn-outline">
      {linkText} →
    </Link>
  </div>
)

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* 1. Hero Banner (Maintained) */}
      <HeroBanner />

      {/* 2. Process Teaser */}
      <section className="section container" style={{ padding: '6rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Innovate. Build. Scale. 🚀</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>How we turn your vibes into digital ventures.</p>
        </div>
        
        <Teaser 
          title="Our Secret Sauce"
          desc="We don't just build websites; we engineer digital ecosystems. From AI chatbots to blockchain loyalty, see how we blend tech with culture."
          link="/how-we-gentrivibe"
          linkText="See Our Process"
        />
      </section>

      {/* 3. Services Teaser Grid */}
      <section style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Choose Your Tier</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Teaser 
              title="SME Basic"
              desc="Perfect for startups asking 'Where do I start?' Get online fast with a professional site."
              link="/services/sme-basic"
              linkText="Starter Logic"
            />
            <Teaser 
              title="E-Commerce Vet"
              desc="Ready to scale? Advanced shops with AI integrations and payments."
              link="/services/e-commerce-vet"
              linkText="Scale Up"
            />
            <Teaser 
              title="Creator Portals"
              desc="For the artists & influencers. Paywalled content, fan hubs, and more."
              link="/services/content-creator-portals"
              linkText="Monetize Vibes"
            />
          </div>
        </div>
      </section>

      {/* 4. About Teaser */}
      <section className="section container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Who is GentriVibe?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          A Nigerian agency with global standards. We are the bridge between your raw idea and a polished digital empire.
        </p>
        <Link to="/about-us" className="btn btn-primary">
          Meet the Team
        </Link>
      </section>

      {/* 5. Testimonials (Maintained) */}
      <ExperienceSection />
    </div>
  )
}

export default Home
