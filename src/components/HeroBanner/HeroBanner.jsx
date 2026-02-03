import { Link } from 'react-router-dom'
import { heroData } from '../../data/components/heroData'
import { useAuth } from '../../context/AuthContext'
import './HeroBanner.css'

const HeroBanner = () => {
  const { title, desc, subDesc, ctaPrimary, ctaSecondary } = heroData
  const { currentUser } = useAuth()

  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="text-gradient fade-in hero__title" dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br />') }} />
        
        <p className="fade-in hero__desc-container">
          {desc} <br />
          <span className="hero__sub-desc">{subDesc}</span>
        </p>

        <div className="fade-in hero__actions">
          {currentUser ? (
             <Link to="/services" className="btn btn-primary">
              {ctaPrimary}
            </Link>
          ) : (
            <Link to="/signup" className="btn btn-primary">
              {ctaPrimary}
            </Link>
          )}
          <Link to="/about-us" className="btn btn-outline">
            {ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
