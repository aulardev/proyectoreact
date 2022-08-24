import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';

const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <header>

      <nav className="nav">
        <div className="nav__brand">
           <h1><Link to={'/'} >Technology Shop</Link></h1>
        </div>
        
        <ul>
          <li><Link to={'/'} onClick={handleClick}>Home</Link></li>
          <li><Link to={'/'} onClick={handleClick}>Products</Link></li>
          <li><Link to="/category/gamer" onClick={handleClick}>Gamer</Link></li>
          <li><Link to="/category/computacion" onClick={handleClick}>Computación</Link></li>
        </ul>

        <div className='cart'>
        <Link to="/cart" onClick={handleClick}></Link> 
        <CartWidget className="cart-icon"  name="cart-outline" /> 
          <span className='item__total'>0</span>
        </div>

      </nav>
    
    </header>
  )
}

export default NavBar

