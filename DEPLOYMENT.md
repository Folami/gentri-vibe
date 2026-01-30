# GentriVibe - Deployment Guide

## Project Overview
GentriVibe is a Website-as-a-Service (WaaS) platform for Telegram adult content creators. This is a React SPA built with Vite, styled with Vanilla CSS, and ready for Netlify deployment.

## Tech Stack
- **Framework**: React 19 + Vite 7
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS (CSS Variables for theming)
- **Deployment Target**: Netlify (Free Tier)

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repo
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Deploy!

### Netlify Configuration
Create a `netlify.toml` in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Features Implemented

### Pages
✅ **Homepage**: Hero section with CTAs, feature teasers, creator spotlights  
✅ **Features**: Tab-based view (Basic vs Pro tiers)  
✅ **Pricing**: Pricing cards + comparison table (₦15k Basic, ₦25k Pro)  
✅ **Bots**: Telegram/WhatsApp bot integration guide  
✅ **Login/Signup**: Auth forms (prototype, no backend yet)  
✅ **Dashboard**: Creator dashboard with upload UI & mock analytics  

### Components
✅ **Navbar**: Logo + navigation + CTA button  
✅ **Footer**: Links + legal info  
✅ **AgeGate**: 18+ verification modal (localStorage-based)  
✅ **Layout**: Wrapper component for pages  

### Styling
✅ **Dark/Neon Theme**: Purple (`#b026ff`), Green (`#39ff14`), Pink (`#ff00ff`)  
✅ **Responsive**: Mobile-first grid layouts  
✅ **Animations**: Hover effects, transitions  

## Next Steps (Post-MVP)

### Backend Integration
- Set up Firebase Auth for real authentication
- Implement payment gateway (Paystack/Stripe)
- Add serverless functions for dynamic features

### Content Management
- Integrate React Dropzone for file uploads
- Store content in a backend (Firebase/Supabase)

### Analytics
- Add Google Analytics tracking
- Build real analytics dashboard

### Advanced Features (Pro Tier)
- AI chatbots integration
- Email CRM with Mailchimp
- Multi-platform sync (OnlyFans/Fansly)

## Environment Variables
For production, you'll need to set these in Netlify:

```
VITE_FIREBASE_API_KEY=your_key
VITE_STRIPE_PUBLIC_KEY=your_key
```

(Note: No env vars are required for the current MVP)

## Support
For issues or questions, contact: support@gentrivibe.com (placeholder)

## License
Proprietary - All Rights Reserved
