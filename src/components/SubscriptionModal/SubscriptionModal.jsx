import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubscriptionModal.css'

const SubscriptionModal = ({ isOpen, onClose, selectedTier, initialPeriod = 'quarterly' }) => {
  const navigate = useNavigate()
  const [selectedPeriod, setSelectedPeriod] = useState(initialPeriod)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Sync with initialPeriod when modal opens or initialPeriod changes
  React.useEffect(() => {
    if (isOpen) {
      setSelectedPeriod(initialPeriod)
    }
  }, [isOpen, initialPeriod])

  if (!isOpen || !selectedTier) return null

  const currentPricing = selectedTier.pricing[selectedPeriod]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate processing
    setTimeout(() => {
      onClose()
      navigate('/transaction-success', { 
        state: { 
          tier: {
            ...selectedTier,
            price: currentPricing.price,
            period: currentPricing.period
          },
          user: formData 
        } 
      })
    }, 1000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>Secure Your Vibe 🔒</h2>
          <p>Plan: <strong>{selectedTier.name}</strong></p>
          
          <div className="period-selector">
            {['quarterly', 'biannually', 'yearly'].map((p) => (
              <label key={p} className={`period-option ${selectedPeriod === p ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="period" 
                  value={p} 
                  checked={selectedPeriod === p}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                />
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </label>
            ))}
          </div>

          <div className="selected-price">
            {currentPricing.monthlyEquivalent} <span className="period">/month</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Billed as {currentPricing.price} {currentPricing.period}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="subscription-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="e.g. Fola Mansory"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="fola@gentrivibe.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              placeholder="+234..."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary modal-submit-btn">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubscriptionModal
