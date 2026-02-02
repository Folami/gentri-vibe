import React from 'react'

const ServiceTemplate = ({ title, price, description, features, ctaText = "Get Started", icon }) => {
  return (
    <div className="page-container fade-in">
      <section className="service-hero" style={{ 
        paddingTop: '8rem', 
        paddingBottom: '4rem', 
        textAlign: 'center',
        background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, var(--bg-primary) 70%)'
      }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icon}</div>
          <h1 className="text-gradient" style={{ fontSize: 'var(--font-4xl)', marginBottom: '1rem' }}>{title}</h1>
          <p style={{ fontSize: 'var(--font-xl)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{description}</p>
          
          <div style={{ 
            display: 'inline-block', 
            padding: '1rem 2rem', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--accent-green)'
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'block' }}>Starting Investment</span>
            <span style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--accent-green)' 
            }}>{price}</span>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What's Included?</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
              <span style={{ fontSize: '1.1rem' }}>{feature}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button 
            className="btn btn-primary"
            onClick={() => document.querySelector('.navbar__link[href="#"]').click()}
            style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
          >
            {ctaText}
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServiceTemplate
