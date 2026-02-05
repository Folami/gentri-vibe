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
        monthlyPrice: '₦45,000',
        pricing: {
          quarterly: { price: '₦45,000', period: 'quarterly', monthlyEquivalent: '₦15,000' },
          biannually: { price: '₦85,000', period: 'biannually', monthlyEquivalent: '₦14,200' },
          yearly: { price: '₦150,000', period: 'yearly', monthlyEquivalent: '₦12,500' }
        },
        features: ['3-Page Website', 'Contact Form', 'Basic SEO', 'Mobile Responsive', '1 Month Support']
      },
      {
        name: 'SME Pro',
        monthlyPrice: '₦80,000',
        pricing: {
          quarterly: { price: '₦105,000', period: 'quarterly', monthlyEquivalent: '₦35,000' },
          biannually: { price: '₦200,000', period: 'biannually', monthlyEquivalent: '₦33,300' },
          yearly: { price: '₦350,000', period: 'yearly', monthlyEquivalent: '₦29,200' }
        },
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
        monthlyPrice: '₦106,000',
        pricing: {
          quarterly: { price: '₦135,000', period: 'quarterly', monthlyEquivalent: '₦45,000' },
          biannually: { price: '₦250,000', period: 'biannually', monthlyEquivalent: '₦41,700' },
          yearly: { price: '₦450,000', period: 'yearly', monthlyEquivalent: '₦37,500' }
        },
        features: ['Shopify/WooCommerce', '20 Product Uploads', 'Payment Gateway', 'Order Dashboard', 'Basic Inventory']
      },
      {
        name: 'Retail Vet',
        monthlyPrice: '₦183,000',
        pricing: {
          quarterly: { price: '₦360,000', period: 'quarterly', monthlyEquivalent: '₦120,000' },
          biannually: { price: '₦700,000', period: 'biannually', monthlyEquivalent: '₦116,700' },
          yearly: { price: '₦1,200,000', period: 'yearly', monthlyEquivalent: '₦100,000' }
        },
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
