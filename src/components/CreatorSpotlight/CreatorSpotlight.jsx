import { creatorSpotlightData } from '../../data/components/creatorSpotlightData'
import './CreatorSpotlight.css'

const CreatorSpotlight = () => {
  const { heading, items } = creatorSpotlightData

  return (
    <section className="spotlight-section">
      <div className="spotlight-container">
        <h2 className="spotlight-heading">{heading}</h2>
        <div className="spotlight-carousel">
          {items.map((item, index) => (
            <div key={index} className="spotlight-card">
              <div className="spotlight-avatar">{item.avatar}</div>
              <p className="spotlight-quote">{item.quote}</p>
              <p className="spotlight-author">{item.author}</p>
              <div className="spotlight-stat">{item.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CreatorSpotlight
