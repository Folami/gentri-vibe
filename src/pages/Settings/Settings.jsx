import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Settings.css'

const Settings = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
    profession: '',
    bio: '',
    socialLink: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    
    // Mock update logic
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => navigate('/dashboard'), 1500)
    }, 1000)
  }

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">User Settings ⚙️</h1>
        <p className="settings-subtitle">Complete your profile to get started</p>

        {success && (
          <div className="settings-success">
            Profile updated successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="settings-form">
          <div className="settings-input-group">
            <label className="settings-label">Full Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="settings-input"
              required
            />
          </div>

          <div className="settings-input-group">
            <label className="settings-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="settings-input settings-input--readonly"
            />
          </div>

          <div className="settings-input-group">
            <label className="settings-label">Profession / Creative Role</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="e.g. Afrobeats Artist, Visual Creator"
              className="settings-input"
            />
          </div>

          <div className="settings-input-group">
            <label className="settings-label">Short Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell your fans a bit about yourself..."
              className="settings-textarea"
              rows="3"
            />
          </div>

          <div className="settings-input-group">
            <label className="settings-label">Social Media / Portfolio Link</label>
            <input
              type="url"
              name="socialLink"
              value={formData.socialLink}
              onChange={handleChange}
              placeholder="https://instagram.com/yourname"
              className="settings-input"
            />
          </div>

          <button disabled={loading} type="submit" className="settings-submit-btn">
            {loading ? 'Saving Changes...' : 'Save and Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings
