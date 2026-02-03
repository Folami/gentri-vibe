import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Signup.css'
import { getAdditionalUserInfo } from 'firebase/auth'

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
      const result = await signup(formData.email, formData.password)
      const details = getAdditionalUserInfo(result)
      if (details?.isNewUser) {
        navigate('/settings')
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError('Failed to create an account: ' + err.message)
    }
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    try {
      setError('')
      setLoading(true)
      console.log("Starting Google Sign-In popup...");
      await googleSignIn()
      console.log("Google Sign-In successful, navigating to settings");
      navigate('/settings')
    } catch (err) {
      console.error("Google Sign-In error:", err);
      setError('Failed to sign in with Google: ' + err.message)
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Join GentriVibe ✨</h1>
        <p className="auth-subtitle">Start building your empire today</p>

        {error && <div className="auth-error">{error}</div>}

        <button 
          disabled={loading} 
          onClick={handleGoogleSignIn} 
          className="auth-google-btn"
        >
          <svg className="auth-google-icon" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="auth-divider">
          <span>OR SIGN UP WITH EMAIL</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-group">
            <label className="auth-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="creator@example.com"
              className="auth-input"
              required
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="auth-input"
              required
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label">Choose Your Plan</label>
            <select 
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="auth-select"
            >
              <option value="basic">Basic - ₦15,000/mo</option>
              <option value="pro">Pro - ₦25,000/mo</option>
            </select>
          </div>

          <button disabled={loading} type="submit" className="auth-submit-btn">
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
