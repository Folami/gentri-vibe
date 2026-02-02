import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const CreatorPortalsPage = () => {
  const currentYear = new Date().getFullYear()

  const heroIcons = [
    { icon: '🎵', text: 'Music & Art' },
    { icon: '👕', text: 'Merch & Drops' },
    { icon: '🔒', text: 'Exclusive Content' }
  ]

  const features = [
    {
      icon: '🌐',
      title: 'Custom Branded Sites',
      desc: 'Own your audience with custom branded sites, paywalled content, exclusive fan hubs, and digital asset stores that turn fans into superfans.'
    },
    {
      icon: '🔐',
      title: 'Exclusive Fan Zone/Paywalled Media Vaults',
      desc: 'Tease content for free, lock premium access. Music previews, exclusive photos, behind-the-scenes. Turn casual listeners into paying subscribers.'
    },
    {
      icon: '🛍️',
      title: 'Digital Merch Store',
      desc: 'Sell beats, presets, wallpapers, or physical merch directly to fans.'
    },
    {
      icon: '🎟️',
      title: 'Event Ticketing',
      desc: 'Sell tickets to virtual or physical gigs without the middleman fees.'
    },
    {
      icon: '💬',
      title: 'Telegram/WhatsApp Bots, Newsletter Integration',
      desc: 'Auto-DM fans, drive engagement 24/7. Perfect for fanbase growth. Build your email list automatically with every sign-up.'
    },
    {
      icon: '🔗',
      title: 'Custom "Link in Bio"',
      desc: 'A stunning, branded landing page for all your social links.'
    },
    {
      icon: '📊',
      title: 'Fan Analytics Dashboard',
      desc: 'Know who your superfans are and where they come from.'
    },
    {
      icon: '🚀',
      title: 'Instant Payouts',
      desc: 'Get paid directly to your account. No waiting periods.'
    }
  ]

  const tiers = [
    {
      name: 'Vibe Starter',
      price: '₦75,000',
      period: 'one-time',
      features: ['Custom Link in Bio', 'Basic Merch Store', 'Newsletter Signup', 'Standard Theme']
    },
    {
      name: 'Chart Topper',
      price: '₦150,000',
      period: 'one-time',
      isPopular: true,
      features: ['Everything in Starter', 'Paywalled Content', 'Event Ticketing', 'Priority Support', 'Custom Domain']
    },
    {
      name: 'Icon Status',
      price: '₦300,000+',
      period: 'custom',
      features: ['Fully Custom App', 'NFT/Blockchain Integration', 'Advanced Analytics', 'Dedicated Manager', 'Global CDN']
    }
  ]

  return (
    <div className="page-container fade-in">
      {/* Hero Section */}
      <section style={{ 
        paddingTop: '8rem', 
        paddingBottom: '4rem', 
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--bg-primary) 100%), radial-gradient(circle at top, rgba(127, 0, 255, 0.15), transparent 60%)'
      }}>
        <div className="container">
            {/* Three Icons Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {heroIcons.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  width: '100px', 
                  height: '100px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '50%',
                  margin: '0 auto 1rem auto',
                  border: '1px solid var(--accent-purple)'
                }}>
                  {item.icon}
                </div>
                <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>{item.text}</span>
              </div>
            ))}
          </div>
          <h1 className="text-gradient" style={{ fontSize: 'var(--font-4xl)', marginBottom: '1.5rem' }}>
            Creator Portals to Amplify <br /> Your Creative Flow 🎨
          </h1>
          <p style={{ 
            fontSize: 'var(--font-xl)', 
            color: 'var(--text-secondary)', 
            maxWidth: '900px', 
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Own your audience with custom branded sites, paywalled content, exclusive fan hubs, 
            and digital asset stores that turn fans into <span style={{ color: 'var(--accent-blue)' }}>superfans</span>—built for Afrobeats artists, influencers, and bold creators.
          </p>
        </div>
      </section>

      {/* Perfect For Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 1rem' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '3rem' }}>Perfect For...</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Afrobeats Artists 🎤',
                desc: 'Drop exclusive EPs, sell beat packs, and connect directly with your superfans avoiding streaming pennies.'
              },
              {
                title: 'Influencers 📸',
                desc: 'Monetize your reach. Sell presets, coaching calls, or exclusive behind-the-scenes content directly.'
              },
              {
                title: 'Digital Artists 🎨',
                desc: 'Showcase your portfolio in 8K. Sell NFTs, prints, and commission slots with zero friction.'
              },
              {
                title: 'Podcasters 🎙️',
                desc: 'Offer ad-free episodes, bonus content, and merch to your loyal listeners in one hub.'
              }
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: '2rem', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                textAlign: 'left',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Choose Your Tier</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            {tiers.map((tier, i) => (
              <div key={i} style={{ 
                backgroundColor: tier.isPopular ? 'var(--bg-secondary)' : 'transparent',
                border: `1px solid ${tier.isPopular ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)'}`,
                padding: '3rem 2rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                transform: tier.isPopular ? 'scale(1.05)' : 'none',
                boxShadow: tier.isPopular ? '0 0 30px rgba(0, 255, 127, 0.1)' : 'none'
              }}>
                {tier.isPopular && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '-15px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    backgroundColor: 'var(--accent-green)', 
                    color: '#000', 
                    padding: '0.5rem 1.5rem', 
                    borderRadius: 'var(--radius-full)', 
                    fontWeight: 'bold' 
                  }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-blue)', marginBottom: '2rem' }}>
                  {tier.price} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/{tier.period}</span>
                </div>
                <ul style={{ marginBottom: '2rem', textAlign: 'left' }}>
                  {tier.features.map((f, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-green)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                  onClick={() => document.querySelector('.navbar__link[href="#"]').click()}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Grid */}
      <section className="container" style={{ padding: '6rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>What You Get</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--bg-card)', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)',
              borderTop: `4px solid ${index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-blue)'}`,
              transition: 'transform 0.3s ease'
            }} className="hover:transform">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center" style={{ padding: '6rem 1rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Ready to elevate your creative vibe? 🚀</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          Join the community of creators who are owning their future.
        </p>
        <button className="btn btn-primary" onClick={() => document.querySelector('.navbar__link[href="#"]').click()}>
          Start Now
        </button>
      </section>
    </div>
  )
}

export default CreatorPortalsPage
