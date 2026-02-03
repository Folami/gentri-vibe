import { useState } from 'react'
import { ageGateData } from '../../data/components/ageGateData'
import './AgeGate.css'

const AgeGate = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if user has already confirmed (localStorage)
    const confirmed = localStorage.getItem('ageConfirmed')
    return !confirmed
  })

  const { title, text, disclaimer, confirmText, denyText, redirectUrl } = ageGateData

  const handleConfirm = () => {
    localStorage.setItem('ageConfirmed', 'true')
    setIsVisible(false)
    if (onConfirm) onConfirm()
  }

  const handleDeny = () => {
    window.location.href = redirectUrl
  }

  if (!isVisible) return null

  return (
    <div className="age-gate-overlay">
      <div className="age-gate-modal">
        <div className="age-gate-icon">🔞</div>
        <h2 className="age-gate-title">{title}</h2>
        <p className="age-gate-text">{text}</p>
        <div className="age-gate-buttons">
          <button className="age-gate-confirm-btn" onClick={handleConfirm}>
            {confirmText}
          </button>
          <button className="age-gate-deny-btn" onClick={handleDeny}>
            {denyText}
          </button>
        </div>
        <p className="age-gate-disclaimer">{disclaimer}</p>
      </div>
    </div>
  )
}

export default AgeGate
