import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../index.css'

const Signup = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    tier: 'basic'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup, googleSignIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await signup(formData.email, formData.password)
      // Note: Firebase doesn't store 'name' in basic email signup, 
      // you could use updateProfile here if needed
      navigate('/dashboard')
    } catch (err) {
      setError('Failed to create an account: ' + err.message)
    }
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    try {
      setError('')
      setLoading(true)
      await googleSignIn()
      navigate('/dashboard')
    } catch (err) {
      setError('Failed to sign in with Google: ' + err.message)
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Join GentriVibe ✨</h1>
        <p style={styles.subtitle}>Start building your empire today</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Creator Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YourName"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="creator@example.com"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Choose Your Plan</label>
            <select 
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="basic">Basic - ₦15,000/mo</option>
              <option value="pro">Pro - ₦25,000/mo</option>
            </select>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Create Account
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>Log in</Link>
        </p>
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
    minHeight: '70vh',
  },
  container: {
    backgroundColor: 'var(--bg-card)',
    padding: '3rem',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '450px',
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
  select: {
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'var(--text-muted)',
  },
  link: {
    color: 'var(--neon-purple)',
    fontWeight: 'bold',
  },
  error: {
    backgroundColor: 'rgba(234, 67, 53, 0.1)',
    color: '#ff4d4d',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    border: '1px solid rgba(234, 67, 53, 0.2)',
    textAlign: 'center',
  },
  googleBtn: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: '600',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '0.5rem',
    transition: 'all 0.2s ease',
    opacity: props => props.disabled ? 0.7 : 1,
    cursor: props => props.disabled ? 'not-allowed' : 'pointer',
  },
  googleIcon: {
    width: '20px',
    height: '20px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '1.5rem 0',
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
  },
  dividerText: {
    padding: '0 1rem',
    flexShrink: 0,
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
    opacity: 1, // Will be overriden by inline or handled by browser for :disabled
  }
}

export default Signup
