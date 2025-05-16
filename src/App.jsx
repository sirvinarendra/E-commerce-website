
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Shop } from './pages/Shop'
import { Shopcatergory } from './pages/Shopcatergory'
import { Footer } from './components/Footer/Footer'
import { Cart } from './pages/Cart'
import { Product } from './pages/Product'
import { LoginSignup } from './pages/LoginSignup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcatergory banner={men_banner} category='men'/> } />
        <Route path='/womens' element={<Shopcatergory  banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<Shopcatergory  banner={kids_banner}  category='kid'/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </>
  )
}

export default App
