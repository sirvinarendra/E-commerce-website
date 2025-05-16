import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cartlogo from '../Assets/cart_icon.png'
import { ShopContext } from '../../context/ShopContext'
const Navbar=()=>{
  const [menu,setMenu]= useState('shop');
  const {getTotalCartItems}=useContext(ShopContext)
  return(
    <>
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>SHOPPERS</p>
      </div>
      
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu('shop')}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('men')}}> <Link  style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('women')}}> <Link  style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==='women'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu('kids')}}> <Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
        </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button >login</button></Link>
        
        <Link to='/cart'>
        <img src={cartlogo} alt="cartlogo" />
        </Link>
        <div className='cart-item-count'>{getTotalCartItems()}</div>
        
        
      </div>
    </div>
    </>
  )
}
export default Navbar;