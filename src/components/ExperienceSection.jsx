import { Link } from 'react-router-dom'
import '../index.css'

const ExperienceSection = () => {
  const testimonials = [
    {
      name: 'Chidi O.',
      role: 'E-commerce Founder',
      quote: 'Doubled our revenue in 3 months! The e-commerce setup was seamless.',
      stat: '+120% Revenue'
    },
    {
      name: 'Ayo T.',
      role: 'Afrobeats Artist',
      quote: 'My fans love the paywalled teasers. Engagement through the roof!',
      stat: '+300% Fan Engagement'
    },
    {
      name: 'Ngozi K.',
      role: 'Tech Startup',
      quote: 'From idea to launch in 4 weeks. The AI chatbot is a game-changer!',
      stat: '24/7 Support Automation'
    }
  ]

  return (
    <section className="section container" style={{ padding: '6rem 1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Vibe Checks 🌟</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            padding: '2rem', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>"{t.quote}"</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-blue)' }}>{t.name}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.role}</span>
              </div>
              <span style={{ 
                fontSize: '0.8rem', 
                backgroundColor: 'rgba(0, 255, 127, 0.1)', 
                color: 'var(--accent-green)', 
                padding: '0.3rem 0.6rem', 
                borderRadius: 'var(--radius-full)' 
              }}>
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
