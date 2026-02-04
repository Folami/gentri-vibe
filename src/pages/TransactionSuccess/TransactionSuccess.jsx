import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './TransactionSuccess.css'

const TransactionSuccess = () => {
  const location = useLocation()
  const { tier, user } = location.state || {}

  return (
    <div className="page-container success-page">
      <div className="success-card fade-in">
        <div className="success-icon">🎉</div>
        <h1 className="text-gradient">Transaction Successful!</h1>
        <p className="success-message">
          Welcome to the family, <strong>{user?.name || 'Viber'}</strong>!
        </p>
        <div className="success-details">
          <p>You have successfully subscribed to:</p>
          <h3>{tier?.name || 'Premium Plan'}</h3>
          <p className="success-email">
            A confirmation email has been sent to {user?.email}
          </p>
        </div>
        <Link to="/dashboard" className="btn btn-primary">
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default TransactionSuccess
