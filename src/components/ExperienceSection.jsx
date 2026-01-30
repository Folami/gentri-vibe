import './ExperienceSection.css'
import './ServicesGrid.css'
import './Shared.css'
import '../index.css'

const ExperienceSection = () => {
  const testimonials = [
    {
      avatar: '👨‍💼',
      name: 'Chidi O.',
      role: 'E-commerce Founder',
      quote: 'Doubled our revenue in 3 months! The e-commerce setup was seamless. 📈',
      stat: '+120% Revenue'
    },
    {
      avatar: '🎤',
      name: 'Ayo T.',
      role: 'Afrobeats Artist',
      quote: 'My fans love the paywalled teasers. Engagement through the roof! 🔥',
      stat: '+300% Fan Engagement'
    },
    {
      avatar: '👩‍💻',
      name: 'Ngozi K.',
      role: 'Tech Startup',
      quote: 'From idea to launch in 4 weeks. The AI chatbot is a game-changer!',
      stat: '24/7 Support Automation'
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section__header">
          <span className="section-number section-number--green">05</span>
          <h2 className="section-title">Experience & Testimonials</h2>
          <p className="section-subtitle">
            Real stories from real partners 💼
          </p>
        </div>

        {/* Testimonials */}
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__avatar">{testimonial.avatar}</div>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
              <div className="testimonial-card__stat">{testimonial.stat}</div>
            </article>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="clients">
          <h3 className="clients__title">Trusted by bold brands</h3>
          <div className="clients__grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="clients__logo">
                <span>Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
