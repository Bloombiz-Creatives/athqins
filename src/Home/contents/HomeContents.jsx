import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'
import BestSellers from '../components/BestSellers'
import PageContent from '../components/PageContent'
import Testimonials from '../components/Testimonials'

const HomeContents = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <FeaturedProperties/>
      <BestSellers/>
      <PageContent/>
      <Testimonials/>
    </div>
  )
}

export default HomeContents
