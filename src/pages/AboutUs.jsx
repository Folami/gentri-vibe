import React from 'react'

const AboutUs = () => {
  return (
    <div className="page-container fade-in">
      <section className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Text Content */}
        <div>
          <h1 className="text-gradient" style={{ fontSize: 'var(--font-4xl)', marginBottom: '1.5rem' }}>
            Born in Nigeria, <br /> Built for the World 🌍
          </h1>
          <p style={{ fontSize: 'var(--font-lg)', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            We are a <strong>Nigerian-born digital agency</strong> powering global vibes with sustainable tech. We noticed a gap: the world has noise, but Africa has <em>stories</em>. We use technology to amplify those stories.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            From Lagos to London, we help SMEs, startups, and creators transition from "just another business" to "market leaders". We don't just build websites; we build ecosystems.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
            <div>
              <h3 style={{ color: 'var(--accent-green)', fontSize: '2.5rem', marginBottom: '0' }}>50+</h3>
              <span style={{ color: 'var(--text-muted)' }}>Projects Launched</span>
            </div>
            <div>
              <h3 style={{ color: 'var(--accent-blue)', fontSize: '2.5rem', marginBottom: '0' }}>100%</h3>
              <span style={{ color: 'var(--text-muted)' }}>Vibe Check Passed</span>
            </div>
          </div>
        </div>

        {/* Visual/Image Placeholder */}
        <div style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          height: '500px', 
          borderRadius: 'var(--radius-xl)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <span style={{ fontSize: '10rem' }}>🇳🇬</span>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 1rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Our Mission</h2>
          <p style={{ fontSize: 'var(--font-xl)', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)' }}>
            "To democratize access to elite digital tools for African creators and businesses, ensuring they don't just compete, but <span style={{ color: 'var(--accent-blue)' }}>dominate</span>."
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
