import { Link } from 'react-router-dom'
import '../index.css'

const HeroBanner = () => {
  return (
    <section className="hero-section" style={{ 
      paddingTop: '8rem', 
      paddingBottom: '6rem', 
      textAlign: 'center',
      background: 'radial-gradient(ellipse at top, rgba(0, 255, 255, 0.1) 0%, var(--bg-primary) 60%)'
    }}>
      <div className="container">
        <h1 className="text-gradient fade-in" style={{ fontSize: 'var(--font-5xl)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Elevate Your <br /> Digital Vibe 🚀
        </h1>
        <p className="fade-in" style={{ 
          fontSize: 'var(--font-xl)', 
          color: 'var(--text-secondary)', 
          marginBottom: '3rem', 
          maxWidth: '800px', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          Innovative Solutions for Bold Businesses & Creators. <br />
          <span style={{ color: 'var(--accent-green)', fontSize: '1rem' }}>AI • Blockchain • Web Development</span>
        </p>

        <div className="fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services-teaser')?.scrollIntoView({ behavior: 'smooth'}) }} className="btn btn-primary">
            Get Started
          </a>
          <Link to="/about-us" className="btn btn-outline">
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
