import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import './App.css'
import './components/Shared.css'

// Layouts & Config
// Components
import Layout from './components/Layout'
import BackToTop from './components/BackToTop/BackToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

// Pages
import Home from './pages/Home/Home'
import HowWeGentriVibe from './pages/HowWeGentriVibe/HowWeGentriVibe'
import AboutUs from './pages/AboutUs/AboutUs'
import CreatorPortals from './pages/CreatorPortals/CreatorPortals'
import Services from './pages/Services/Services'
import SMEPortals from './pages/SMEPortals/SMEPortals'
import ECommercePortals from './pages/ECommercePortals/ECommercePortals'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './pages/Settings/Settings'

// Data
import { servicesData } from './data/pages/servicesData'

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth()
  if (!currentUser) return <Navigate to="/signup" />
  return children
}

function App() {
  return (
    <Router basename="/gentri-vibe" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <div className="app-container">
          <Routes>
            <Route element={<Layout />}>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/how-we-gentrivibe" element={<HowWeGentriVibe />} />
              <Route path="/about-us" element={<AboutUs />} />
              
              {/* Service Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/sme-portals" element={<SMEPortals />} />
              <Route path="/services/e-commerce-portals" element={<ECommercePortals />} />
              <Route path="/services/content-creator-portals" element={<CreatorPortals />} />
              
              {/* Redirects for legacy links if any */}
              <Route path="/services/sme-basic" element={<Navigate to="/services/sme-portals" replace />} />
              <Route path="/services/sme-pro" element={<Navigate to="/services/sme-portals" replace />} />
              <Route path="/services/e-commerce-starter" element={<Navigate to="/services/e-commerce-portals" replace />} />
              
              {/* Auth & App Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
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
