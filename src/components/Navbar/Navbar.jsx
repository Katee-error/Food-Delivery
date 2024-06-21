import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='nav'>
        <img src={assets.logo} alt="logo"/>
        <ul className='nav__menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?'active':''}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?'active':''}>Mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?'active':''}>Contacts us</a>
        </ul>
        <div className="nav__right">
          <img src={assets.search_icon} alt="search" />
          <div className="nav__search__icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
// active-class?????

