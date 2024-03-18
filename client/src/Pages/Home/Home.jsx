import Contact from "../../Components/Contact/Contact"
import OurProducts from "../../Components/Products/OurProducts"
import Products from "../../Components/Products/Products"
import ServiceCard from "../../Components/Services/ServiceCard"
import Slider from "../../Components/Slider/Slider"

const Home = () => {
  return (
    <div>
        <Slider/>
        <Products/>
        <OurProducts/>
        <ServiceCard/>
        <Contact/>
    </div>
  )
}

export default Home