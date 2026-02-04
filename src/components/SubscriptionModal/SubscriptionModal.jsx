import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubscriptionModal.css'

const SubscriptionModal = ({ isOpen, onClose, selectedTier }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  if (!isOpen || !selectedTier) return null

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
          tier: selectedTier,
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
          <p>You selected: <strong>{selectedTier.name}</strong></p>
          <div className="selected-price">
            {selectedTier.price} <span className="period">/{selectedTier.period}</span>
          </div>
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
