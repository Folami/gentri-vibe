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
import CreatorTools from './pages/CreatorTools'

function App() {
  return (
    <Router>
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
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
