import { useState } from 'react'
import '../index.css'

const AgeGate = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if user has already confirmed (localStorage)
    const confirmed = localStorage.getItem('ageConfirmed')
    return !confirmed
  })

  const handleConfirm = () => {
    localStorage.setItem('ageConfirmed', 'true')
    setIsVisible(false)
    if (onConfirm) onConfirm()
  }

  const handleDeny = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!isVisible) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.icon}>🔞</div>
        <h2 style={styles.title}>Age Verification Required</h2>
        <p style={styles.text}>
          This site contains adult content. You must be 18 years or older to enter.
        </p>
        <div style={styles.buttons}>
          <button style={styles.confirmBtn} onClick={handleConfirm}>
            I am 18+
          </button>
          <button style={styles.denyBtn} onClick={handleDeny}>
            Exit
          </button>
        </div>
        <p style={styles.disclaimer}>
          By entering, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    backdropFilter: 'blur(10px)',
  },
  modal: {
    backgroundColor: 'var(--bg-card)',
    padding: '3rem',
    borderRadius: '20px',
    maxWidth: '500px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    color: 'var(--text-muted)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  confirmBtn: {
    flex: 1,
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-green)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  denyBtn: {
    flex: 1,
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  disclaimer: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontStyle: 'italic',
  }
}

export default AgeGate
