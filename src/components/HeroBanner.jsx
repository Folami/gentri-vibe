import { Link } from 'react-router-dom'
import './HeroBanner.css'
import '../index.css'

const HeroBanner = () => {
  return (
    <section className="hero" role="banner">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Elevate Your Digital Vibe 🚀
          </h1>
          <p className="hero__tagline">
            Innovative Solutions for Bold Businesses & Creators
          </p>
          
          <blockquote className="hero__quote">
            <span className="hero__quote-icon">"</span>
            Innovation distinguishes between a leader and a follower.
            <span className="hero__quote-icon">"</span>
            <cite className="hero__citation">— Steve Jobs</cite>
          </blockquote>

          <div className="hero__description">
            <p>
              We're a partnership-driven digital agency empowering Nigerian and African 
              businesses with cutting-edge tech. From AI-powered automation to blockchain 
              integrations, we build sustainable digital ecosystems that drive 
              <strong> real growth</strong>.
            </p>
          </div>

          <div className="hero__cta-group">
            <a href="#packages" className="btn btn--primary">
              Get Started
            </a>
            <a href="#services" className="btn btn--secondary">
              Explore Services
            </a>
          </div>

          <div className="hero__badges">
            <span className="badge">🌍 Global Tech</span>
            <span className="badge">🤝 Local Partnership</span>
            <span className="badge">♻️ Sustainable</span>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="hero__card-body">
              <div className="hero__icon-grid">
                <span className="hero__service-icon" aria-label="Web Development">🌐</span>
                <span className="hero__service-icon" aria-label="AI Products">🤖</span>
                <span className="hero__service-icon" aria-label="Blockchain">⛓️</span>
                <span className="hero__service-icon" aria-label="Design">🎨</span>
              </div>
              <div className="hero__pulse-indicator">
                <span className="pulse"></span>
                <span className="hero__status-text">Powering Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
