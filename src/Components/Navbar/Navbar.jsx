import React,{useContext, useState} from 'react'
import './Navbar.css';
import logo from '../assets/assets/logo.png'
import search_icon from '../assets/assets/search_icon.png';
import basket_icon from '../assets/assets/basket_icon.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState('Home');
    const{  getCartTotalAmount} = useContext(StoreContext);
    
  return (
    <div className='navbar'>
        <Link to="/"><img src={logo} alt="nav-logo" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("Home")} className={menu==='Home'?"active":""}>Home</Link>
            <a href="#exploreMenu" onClick={()=>setMenu("Menu")} className={menu==='Menu'?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==='Mobile-app'?"active":""}>Mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("Contact Us")} className={menu==='Contact Us'?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="search"/>
            <div className="navbar-search-icon">
                <Link to ="/cart" ><img src={basket_icon} alt="basket"/></Link>
             
                <div className={getCartTotalAmount()===0?"":"dot"}></div>
            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
    </div>

  )
}

export default Navbar