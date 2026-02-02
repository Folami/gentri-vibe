import React from 'react'

const HowWeGentriVibe = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Vibe Check',
      desc: 'We don\'t just build; we listen. We dive deep into your brand, your audience, and your goals. Whether you\'re a startup or an Afrobeat star, we map out the digital soul of your project.',
      icon: '🔍'
    },
    {
      id: '02',
      title: 'Strategy & Blueprint',
      desc: 'We blend AI insights with local market know-how to create a roadmap. No guesswork. Just data-driven strategy mixed with creative genius.',
      icon: '🗺️'
    },
    {
      id: '03',
      title: 'Build & Automate',
      desc: 'This is where the magic happens. We code responsive sites, train AI chatbots, and mint blockchain assets. Fast, secure, and scalable.',
      icon: '⚡'
    },
    {
      id: '04',
      title: 'Launch & Elevate',
      desc: 'We don\'t just hand over keys; we launch with you. SEO, performance optimization, and marketing tools to ensure you take off immediately.',
      icon: '🚀'
    }
  ]

  return (
    <div className="page-container fade-in">
      {/* Hero Section */}
      <section className="section text-center" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: 'var(--font-4xl)' }}>How We Gentrivibe</h1>
        <p style={{ fontSize: 'var(--font-xl)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          We blend <span style={{ color: 'var(--accent-blue)' }}>AI magic</span>, <span style={{ color: 'var(--accent-green)' }}>blockchain security</span>, and <span style={{ color: 'var(--accent-purple)' }}>creative vibes</span> to elevate your brand.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {steps.map((step) => (
            <div key={step.id} style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ 
                position: 'absolute', 
                top: '-20px', 
                right: '-20px', 
                fontSize: '8rem', 
                color: 'rgba(255,255,255,0.03)', 
                fontWeight: 'bold',
                fontFamily: 'var(--font-heading)'
              }}>
                {step.id}
              </span>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{step.icon}</div>
              <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center" style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 1rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Ready to Start Your Journey?</h2>
        <button className="btn btn-primary" onClick={() => document.querySelector('.navbar__link[href="#"]').click()}>
          Get Your Blueprint 📄
        </button>
      </section>
    </div>
  )
}

export default HowWeGentriVibe
