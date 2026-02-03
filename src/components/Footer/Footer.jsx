import React from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../../data/components/footerData'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { brand, columns, copyright } = footerData

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              {brand.name}
            </div>
            <p className="footer__tagline">
              {brand.tagline}
            </p>
          </div>

          {/* Dynamic Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              {col.links && col.links.map((link, i) => (
                <Link key={i} to={link.path} className="footer__link">
                  {link.text}
                </Link>
              ))}
              {col.content && col.content.map((item, i) => (
                item.type === 'external' ? (
                  <a 
                    key={i}
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer__external-link"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p key={i} style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                )
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} {copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
