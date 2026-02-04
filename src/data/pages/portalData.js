export const portalData = {
  sme: {
    hero: {
      title: "SME Launchpad 🚀",
      subtitle: "From Zero to Digital Hero",
      desc: "Stop relying on DM-for-price. Get a fully automated, professional digital presence that functions 24/7.",
      heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
    },
    tiers: [
      {
        name: 'SME Basic',
        price: '₦50,000',
        period: 'monthly',
        features: ['3-Page Website', 'Contact Form', 'Basic SEO', 'Mobile Responsive', '1 Month Support']
      },
      {
        name: 'SME Pro',
        price: '₦85,000',
        period: 'monthly',
        isPopular: true,
        features: ['Up to 7 Pages', 'Custom Branding', 'Basic AI Chatbot', 'Blog/News Section', 'Analytics Dashboard', 'Priority Support']
      }
    ],
    cta: {
      title: "Ready to go pro?",
      buttonText: "Start My Project",
      link: "/contact"
    }
  },
  ecommerce: {
    hero: {
      title: "E-Commerce Empire 🛒",
      subtitle: "Sell Global, Ship Local",
      desc: "Secure payments, inventory management, and AI-driven sales focused on conversion.",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1600"
    },
    tiers: [
      {
        name: 'Starter Store',
        price: '₦120,000',
        period: 'monthly',
        features: ['Shopify/WooCommerce', '20 Product Uploads', 'Payment Gateway', 'Order Dashboard', 'Basic Inventory']
      },
      {
        name: 'Retail Vet',
        price: '₦200,000+',
        period: 'monthly',
        isPopular: true,
        features: ['Unlimited Products', 'AI Recommendations', 'Blockchain Loyalty', 'CRM Integration', 'Email Marketing Automation']
      }
    ],
    cta: {
      title: "Scale your sales today",
      buttonText: "Build My Store",
      link: "/contact"
    }
  }
}
