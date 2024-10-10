import Banner from '../../components/banner/Banner'
import Beauty from '../../components/beauty/Beauty'
import Brand from '../../components/brand/Brand'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import Section from '../../components/section/Section'
import Shelf from '../../components/Shelves/Shelv'
import BodyCare from  "../../components/BodyCare/BodyCare"
import Footer from  "../../components/footer/Footer"
import MakeUp from  "../../components/makeup/MakeUp"

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Products/>
        <Section/>
        <Brand/>
        <MakeUp/>
        <Shelf/>
        <Beauty/>
        <BodyCare/>
        <Footer/>
    </div>
  )
}

export default Home