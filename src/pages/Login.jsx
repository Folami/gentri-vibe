import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement actual authentication
    console.log('Login attempt:', formData)
    alert('Login functionality coming soon! For now, this is a prototype.')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome back 💜</h1>
        <p style={styles.subtitle}>Log in to access your creator dashboard</p>

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

          <button type="submit" style={styles.submitBtn}>
            Log In
          </button>
        </form>

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
  submitBtn: {
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.4)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'var(--text-muted)',
  },
  link: {
    color: 'var(--neon-green)',
    fontWeight: 'bold',
  }
}

export default Login
