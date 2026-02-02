import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import './App.css'

// Layouts & Config
import Layout from './components/Layout'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import ThemeToggle from './components/ThemeToggle'

// Pages
import Home from './pages/Home'
import HowWeGentriVibe from './pages/HowWeGentriVibe'
import AboutUs from './pages/AboutUs'
import CreatorPortalsPage from './pages/CreatorPortalsPage'
import ServiceTemplate from './components/ServiceTemplate'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

// Service Data Configurations
const servicesData = {
  smeBasic: {
    title: "SME Basic",
    price: "₦50,000",
    description: "The essential digital launchpad for startups. Get online fast, look professional, and start building trust.",
    features: [
      "3-Page Responsive Website (Home, About, Contact)",
      "Basic SEO Setup (Get found on Google)",
      "Contact Form Integration",
      "1 Month Free Maintenance",
      "Mobile-First Design"
    ],
    icon: "🚀",
    ctaText: "Launch Now"
  },
  smePro: {
    title: "SME Pro",
    price: "₦85,000",
    description: "For businesses ready to scale. More pages, more features, and AI-powered tools to engage customers.",
    features: [
      "Up to 7 Pages",
      "Custom Branding & Graphics",
      "AI Chatbot Integration (Basic)",
      "Blog/News Section",
      "Google Analytics Setup",
      "Social Media Integration"
    ],
    icon: "💼",
    ctaText: "Go Pro"
  },
  ecommStarter: {
    title: "E-Commerce Starter",
    price: "₦120,000",
    description: "Start selling online. Secure payments, product showcases, and a seamless checkout experience.",
    features: [
      "Shopify or WooCommerce Setup",
      "Up to 20 Products Upload",
      "Paystack/Flutterwave Integration",
      "Order Management Dashboard",
      "Basic Inventory System"
    ],
    icon: "🛒",
    ctaText: "Start Selling"
  },
  ecommVet: {
    title: "E-Commerce Vet",
    price: "₦200,000+",
    description: "The empire builder. Advanced features, automation, and blockchain loyalty systems for high-volume stores.",
    features: [
      "Unlimited Products",
      "Advanced AI Recommendations",
      "Blockchain Loyalty Tokens",
      "Automated Email Marketing",
      "CRM Integration",
      "Multi-Currency Support"
    ],
    icon: "🏢",
    ctaText: "Scale to Infinity"
  }, 
  creatorPortals: {
    title: "Creator Portals to Amplify Your Creative Flow 🎨",
    price: "₦75,000",
    description: "Own your audience with custom branded sites, paywalled content, exclusive fan hubs, and digital asset stores that turn fans into superfans—built for Afrobeats artists, influencers, and bold creators.",
    features: [
      "Exclusive Fan Zone (Paywall)",
      "Music/Video Teaser Players",
      "Digital Merch Store",
      "Newsletter Integration",
      "Event Ticket Sales",
      "Custom 'Link in Bio' Page"
    ],
    icon: "🎤",
    ctaText: "Monetize Your Vibe"
  }
}

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
              <Route path="/services/sme-basic" element={<ServiceTemplate {...servicesData.smeBasic} />} />
              <Route path="/services/sme-pro" element={<ServiceTemplate {...servicesData.smePro} />} />
              <Route path="/services/e-commerce-starter" element={<ServiceTemplate {...servicesData.ecommStarter} />} />
              <Route path="/services/e-commerce-vet" element={<ServiceTemplate {...servicesData.ecommVet} />} />
              <Route path="/services/content-creator-portals" element={<CreatorPortalsPage />} />
              <Route path="/creator-tools" element={<Navigate to="/services/content-creator-portals" replace />} />

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
