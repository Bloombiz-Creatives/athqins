import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'
import BestSellers from '../components/BestSellers'
import PageContent from '../components/PageContent'
import Testimonials from '../components/Testimonials'
import Cards from '../components/Cards'
import OurStrenth from '../components/OurStrenth'
import Blogs from '../components/Blogs'

const HomeContents = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <FeaturedProperties/>
      <BestSellers/>
      <PageContent/>
      <Testimonials/>
      <Cards/>
      <OurStrenth/>
      <Blogs/>
    </div>
  )
}

export default HomeContents
