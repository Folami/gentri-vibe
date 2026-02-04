import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../index.css'

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
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>User Settings ⚙️</h1>
        <p style={styles.subtitle}>Complete your profile to get started</p>

        {success && (
          <div style={styles.success}>
            Profile updated successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Your Full Name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              style={{...styles.input, opacity: 0.7, cursor: 'not-allowed'}}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Profession / Creative Role</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="e.g. Afrobeats Artist, Visual Creator"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Short Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell your fans a bit about yourself..."
              style={styles.textarea}
              rows="3"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Social Media / Portfolio Link</label>
            <input
              type="url"
              name="socialLink"
              value={formData.socialLink}
              onChange={handleChange}
              placeholder="https://instagram.com/yourname"
              style={styles.input}
            />
          </div>

          <button disabled={loading} type="submit" style={styles.submitBtn}>
            {loading ? 'Saving Changes...' : 'Save and Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  page: {
    padding: '4rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
  container: {
    backgroundColor: 'var(--bg-card)',
    padding: '3rem',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '550px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
  },
  input: {
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'none',
  },
  submitBtn: {
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(57, 255, 20, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  success: {
    backgroundColor: 'rgba(57, 255, 20, 0.1)',
    color: 'var(--neon-green)',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    border: '1px solid rgba(57, 255, 20, 0.2)',
    textAlign: 'center',
  }
}

export default Settings
