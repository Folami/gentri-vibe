import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// AgeGate temporarily disabled for rebrand
// import AgeGate from './components/AgeGate'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Bots from './pages/Bots'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import CreatorTools from './pages/CreatorTools'
import BackToTop from './components/BackToTop'
import ThemeToggle from './components/ThemeToggle'
import WhatsAppButton from './components/WhatsAppButton'
import { AuthProvider, useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth()
  if (!currentUser) return <Navigate to="/signup" />
  return children
}

function App() {
  return (
    <Router 
      basename="/gentri-vibe" 
      future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}
    >
      <AuthProvider>
        {/* <AgeGate /> */}
        <div className="app-container">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/bots" element={<Bots />} />
              <Route path="/creator-tools" element={<CreatorTools />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/settings" 
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } 
              />
            </Route>
          </Routes>
          <BackToTop />
          <WhatsAppButton />
          <ThemeToggle />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
