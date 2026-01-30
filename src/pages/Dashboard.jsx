import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploadedFiles([...uploadedFiles, ...files])
    alert(`${files.length} file(s) uploaded! (Mock upload - not actually stored)`)
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Creator Dashboard</h1>
        <Link to="/">
          <button style={styles.logoutBtn}>Back to Site</button>
        </Link>
      </header>

      <div style={styles.grid}>
        {/* Upload Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📸 Upload Content</h2>
          <div style={styles.uploadArea}>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              style={styles.fileInput}
              id="file-upload"
            />
            <label htmlFor="file-upload" style={styles.uploadLabel}>
              <div style={styles.uploadIcon}>☁️</div>
              <p>Click to upload photos/videos</p>
              <span style={styles.uploadHint}>or drag and drop</span>
            </label>
          </div>
          {uploadedFiles.length > 0 && (
            <div style={styles.fileList}>
              <h3 style={styles.fileListTitle}>Uploaded ({uploadedFiles.length})</h3>
              {uploadedFiles.map((file, index) => (
                <div key={index} style={styles.fileItem}>
                  📄 {file.name}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Analytics Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📊 Analytics (Last 7 Days)</h2>
          <div style={styles.statsGrid}>
            <StatCard 
              label="Total Views"
              value="1,247"
              change="+12%"
            />
            <StatCard 
              label="Page Unlocks"
              value="43"
              change="+8%"
            />
            <StatCard 
              label="Revenue"
              value="₦87,500"
              change="+22%"
            />
            <StatCard 
              label="Conversion"
              value="3.4%"
              change="+0.5%"
            />
          </div>
          <div style={styles.chartPlaceholder}>
            <p style={{ color: 'var(--text-muted)' }}>
              📈 Chart visualization coming soon
            </p>
          </div>
        </section>

        {/* Settings Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>⚙️ Quick Settings</h2>
          <div style={styles.settingsList}>
            <SettingItem label="Custom Domain" value="yourname.gentrivibe.com" />
            <SettingItem label="Current Plan" value="Basic (₦15k/mo)" />
            <SettingItem label="Paywall Price" value="₦2,500" />
            <button style={styles.upgradeBtn}>
              ⭐ Upgrade to Pro
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

const StatCard = ({ label, value, change }) => (
  <div style={styles.statCard}>
    <p style={styles.statLabel}>{label}</p>
    <h3 style={styles.statValue}>{value}</h3>
    <span style={styles.statChange}>{change}</span>
  </div>
)

const SettingItem = ({ label, value }) => (
  <div style={styles.settingItem}>
    <span style={styles.settingLabel}>{label}</span>
    <span style={styles.settingValue}>{value}</span>
  </div>
)

const styles = {
  page: {
    padding: '2rem 1rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  title: {
    fontSize: '2.5rem',
  },
  logoutBtn: {
    padding: '0.6rem 1.5rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  section: {
    backgroundColor: 'var(--bg-card)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
  },
  uploadArea: {
    border: '2px dashed rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '3rem 1rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
  fileInput: {
    display: 'none',
  },
  uploadLabel: {
    cursor: 'pointer',
    display: 'block',
  },
  uploadIcon: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  uploadHint: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    display: 'block',
    marginTop: '0.5rem',
  },
  fileList: {
    marginTop: '1.5rem',
  },
  fileListTitle: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
  },
  fileItem: {
    padding: '0.8rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statCard: {
    padding: '1.5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    textAlign: 'center',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    marginBottom: '0.5rem',
  },
  statValue: {
    fontSize: '1.8rem',
    marginBottom: '0.3rem',
  },
  statChange: {
    fontSize: '0.85rem',
    color: 'var(--neon-green)',
    fontWeight: 'bold',
  },
  chartPlaceholder: {
    padding: '4rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px dashed rgba(255, 255, 255, 0.1)',
  },
  settingsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
  },
  settingLabel: {
    color: 'var(--text-muted)',
  },
  settingValue: {
    fontWeight: 'bold',
  },
  upgradeBtn: {
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: 'var(--neon-purple)',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(176, 38, 255, 0.3)',
  }
}

export default Dashboard
