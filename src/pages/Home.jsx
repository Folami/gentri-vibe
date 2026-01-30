import HeroBanner from '../components/HeroBanner'
import ServicesGrid from '../components/ServicesGrid'
import WhyUs from '../components/WhyUs'
import AboutSection from '../components/AboutSection'
import PackagesGrid from '../components/PackagesGrid'
import ExperienceSection from '../components/ExperienceSection'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ServicesGrid />
      <WhyUs />
      <AboutSection />
      <PackagesGrid />
      <ExperienceSection />
    </div>
  )
}

export default Home
