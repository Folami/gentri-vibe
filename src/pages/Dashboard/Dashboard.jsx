import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { dashboardData } from '../../data/pages/dashboardData'
import './Dashboard.css'

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const { stats, settingsList } = dashboardData

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploadedFiles([...uploadedFiles, ...files])
    alert(`${files.length} file(s) uploaded! (Mock upload - not actually stored)`)
  }

  return (
    <div className="dashboard-page">
      <header className="dash__header">
        <div>
          <h1 className="dash__title">Creator Dashboard</h1>
          <p className="dash__user-email">Logged in as: {currentUser?.email}</p>
        </div>
        <div className="dash__header-btns">
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <button className="dash__btn-secondary">⚙️ Settings</button>
          </Link>
        </div>
      </header>

      <div className="dash__grid">
        {/* Upload Section */}
        <section className="dash__section">
          <h2 className="dash__section-title">📸 Upload Content</h2>
          <div className="dash__upload-area">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="dash__file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="dash__upload-label">
              <div className="dash__upload-icon">☁️</div>
              <p>Click to upload photos/videos</p>
              <span className="dash__upload-hint">or drag and drop</span>
            </label>
          </div>
          {uploadedFiles.length > 0 && (
            <div className="dash__file-list">
              <h3 className="dash__file-list-title">Uploaded ({uploadedFiles.length})</h3>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="dash__file-item">
                  📄 {file.name}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Analytics Section */}
        <section className="dash__section">
          <h2 className="dash__section-title">📊 Analytics (Last 7 Days)</h2>
          <div className="dash__stats-grid">
            {stats.map((stat, i) => (
              <StatCard 
                key={i}
                label={stat.label}
                value={stat.value}
                change={stat.change}
              />
            ))}
          </div>
          <div className="dash__chart-placeholder">
            <p style={{ color: 'var(--text-muted)' }}>
              📈 Chart visualization coming soon
            </p>
          </div>
        </section>

        {/* Settings Section */}
        <section className="dash__section">
          <h2 className="dash__section-title">⚙️ Quick Settings</h2>
          <div className="dash__settings-list">
            {settingsList.map((item, i) => (
              <SettingItem key={i} label={item.label} value={item.value} />
            ))}
            <Link to="/settings" style={{ textDecoration: 'none' }}>
              <button className="dash__edit-btn">
                ✏️ Edit Profile Settings
              </button>
            </Link>
            <button className="dash__upgrade-btn">
              ⭐ Upgrade to Pro
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

const StatCard = ({ label, value, change }) => (
  <div className="stat-card">
    <p className="stat-card__label">{label}</p>
    <h3 className="stat-card__value">{value}</h3>
    <span className="stat-card__change">{change}</span>
  </div>
)

const SettingItem = ({ label, value }) => (
  <div className="setting-item">
    <span className="setting-item__label">{label}</span>
    <span className="setting-item__value">{value}</span>
  </div>
)

export default Dashboard
