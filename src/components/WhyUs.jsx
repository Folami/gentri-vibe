import './Shared.css'
import './ServicesGrid.css'
import '../index.css'

const WhyUs = () => {
  const reasons = [
    {
      icon: '💡',
      title: 'Innovation-First',
      description: 'We don\'t just follow trends—we create them. AI, blockchain, and cutting-edge tech are our playground.'
    },
    {
      icon: '📈',
      title: 'Results-Oriented',
      description: 'Your success is our KPI. We build solutions that drive measurable growth, not just pretty designs.'
    },
    {
      icon: '♻️',
      title: 'Ethical & Sustainable',
      description: 'Long-term partnerships over quick wins. We build ecosystems that scale responsibly.'
    },
    {
      icon: '🤝',
      title: 'Personal Partnership',
      description: 'Family-run honesty meets enterprise-level delivery. You\'re not a ticket number—you\'re a partner.'
    }
  ]

  return (
    <section id="why-us" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="section-number section-number--green">02</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Real partnerships for real growth 🌱
          </p>
        </div>

        <div className="services__grid">
          {reasons.map((reason, index) => (
            <article key={index} className="service-card">
              <div className="service-card__icon-wrapper">
                <span className="service-card__icon" role="img" aria-label={reason.title}>{reason.icon}</span>
              </div>
              <h3 className="service-card__title">{reason.title}</h3>
              <p className="service-card__description">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
