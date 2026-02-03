import './AboutSection.css'
import './ServicesGrid.css'
import './Shared.css'
import '../index.css'

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section-number section-number--blue">03</span>
          <h2 className="section-title">About Us</h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__lead">
              We're a <strong>dynamic digital agency</strong> on a mission to empower Nigerian 
              and African businesses with <strong>global-class technology</strong>.
            </p>
            
            <p className="about__paragraph">
              Born from the belief that innovation should be accessible to everyone, 
              GentriVibe bridges the gap between cutting-edge tech (AI, blockchain, automation) 
              and the bold businesses & creators shaping Africa's digital future.
            </p>

            <p className="about__paragraph">
              We're not your typical agency. We're a <strong>partnership-driven team</strong> 
              that combines family-run honesty with enterprise-level delivery. Every project 
              is a collaboration—your vision, our expertise, unstoppable results.
            </p>

            <div className="about__stats">
              <div className="stat">
                <span className="stat__number">5+</span>
                <span className="stat__label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat__number">50+</span>
                <span className="stat__label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat__number">100%</span>
                <span className="stat__label">Client Satisfaction</span>
              </div>
            </div>

            <blockquote className="about__quote">
              "Our mission: Build sustainable digital ecosystems that drive 
              <strong> long-term growth</strong>, not just quick wins."
            </blockquote>
          </div>

          <div className="about__visual">
            <div className="about__placeholder">
              <span className="about__placeholder-icon">🚀</span>
              <p className="about__placeholder-text">
                Innovation <br /> Meets <br /> Partnership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
