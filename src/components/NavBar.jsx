import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar () {


  return (
    <header>

      <nav className="nav">
        <div className="nav__brand">
           <h1><Link to={'/'} >Technology Shop</Link></h1>
        </div>
        
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/'} >Products</Link></li>
          <li><Link to="/category/gamer">Gamer</Link></li>
          <li><Link to="/category/computacion">Computación</Link></li>
        </ul>

        <div className='cart'>
        <Link to="/cart"> <ion-icon className="cart-icon"  name="cart-outline"></ion-icon> </Link> 
          <span className='item__total'>0</span>
        </div>

      </nav>
    
    </header>
  )
}

