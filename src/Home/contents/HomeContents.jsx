import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'
import BestSellers from '../components/BestSellers'
import PageContent from '../components/PageContent'

const HomeContents = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <FeaturedProperties/>
      <BestSellers/>
      <PageContent/>
    </div>
  )
}

export default HomeContents
