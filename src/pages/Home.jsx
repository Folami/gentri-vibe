import HeroBanner from '../components/HeroBanner'
import WhyUs from '../components/WhyUs'
import ServicesGrid from '../components/ServicesGrid'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import PackagesGrid from '../components/PackagesGrid'
import CreatorSpotlight from '../components/CreatorSpotlight'
// import TeaserPreview from '../components/TeaserPreview'

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <ServicesGrid />
      <WhyUs />
      <AboutSection />
      <PackagesGrid />
      <ExperienceSection />
      <CreatorSpotlight />
      {/* <TeaserPreview /> */}
    </div>
  )
}

export default Home
