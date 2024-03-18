
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import SingleProduct from './Pages/singleproduct/SingleProduct'
import {Toaster} from 'react-hot-toast'
import Cart from './Pages/Cart/Cart'
import Success from './Pages/Cart/Success'
import CateSingleProduct from './Pages/singleproduct/SingleCategorey'
import OurProducts from './Components/Products/OurProducts'
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact'
import PrivacyPolicy from './Pages/Policys/PrivacyPolicy'
import ReturnPolicy from './Pages/Policys/ReturnPolicy'
import ShippingPolicy from './Pages/Policys/Shipping'
import TermsAndConditions from './Pages/Policys/TermConditions'
import AllProducts from './Pages/ProductPage/AllProducts'
function App() {

  return (
    <BrowserRouter>
   <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Products-info/:name' element={<SingleProduct/>} />
    <Route path='/Cat-Prodcuts-Products-info/:name' element={<CateSingleProduct/>} />
    <Route path='/Collections' element={<Products/>} />
    <Route path='/Privacy-Policy' element={<PrivacyPolicy/>} />
    <Route path='/ReturnPolicy' element={<ReturnPolicy/>} />
    <Route path='/All-Products' element={<AllProducts/>} />


    <Route path='/ShippingPolicy' element={<ShippingPolicy/>} />
    <Route path='/TermsAndConditions' element={<TermsAndConditions/>} />
    <Route path='/Contact' element={<Contact/>} />




    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Success' element={<Success/>} />


    </Routes>
    <Toaster/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
