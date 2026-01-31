import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAdditionalUserInfo } from 'firebase/auth'
import '../index.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, googleSignIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await login(formData.email, formData.password)
      navigate('/dashboard')
    } catch (err) {
      setError('Failed to log in: ' + err.message)
    }
    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    try {
      setError('')
      setLoading(true)
      console.log("Starting Google Sign-In popup...");
      const result = await googleSignIn()
      console.log("Popup result received:", result?.user?.email);
      
      const details = getAdditionalUserInfo(result)
      if (details?.isNewUser) {
        console.log("New user detected, navigating to settings");
        navigate('/settings')
      } else {
        console.log("Existing user detected, navigating to dashboard");
        navigate('/dashboard')
      }
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
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome back 💜</h1>
        <p style={styles.subtitle}>Log in to access your creator dashboard</p>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
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

          <button disabled={loading} type="submit" style={styles.submitBtn}>
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <div style={styles.divider}>
          <span style={styles.dividerText}>OR</span>
        </div>

        <button 
          disabled={loading} 
          onClick={handleGoogleSignIn} 
          style={styles.googleBtn}
        >
          <svg style={styles.googleIcon} viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p style={styles.footer}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}>Sign up</Link>
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
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'var(--text-muted)',
  },
  link: {
    color: 'var(--neon-green)',
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
    cursor: 'pointer',
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
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }
}

export default Login
