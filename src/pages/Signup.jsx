import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Signup = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    tier: 'basic'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement actual authentication
    console.log('Signup attempt:', formData)
    alert('Signup functionality coming soon! For now, this is a prototype.')
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
  submitBtn: {
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(57, 255, 20, 0.4)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'var(--text-muted)',
  },
  link: {
    color: 'var(--neon-purple)',
    fontWeight: 'bold',
  }
}

export default Signup
