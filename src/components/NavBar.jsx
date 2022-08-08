import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar () {


  return (
    <div>
      <nav className="nav">
        <div className="logo" width="150">
          
        </div>
        <a href="#" className="nav__brand">Technology Shop</a>
        <ul className="nav__menu">
          <Link to={'/'} >Home</Link>
          <Link to="/category/gamer">Gamer</Link>
          <Link to="/category/computacion">Computación</Link>
          
        </ul>
        <div className='cart'>
        
        <ion-icon className="cart-icon"  name="cart-outline"></ion-icon>
        <span className='item__total'>0</span>
       
        </div>
      </nav>
    
    </div>
  )
}

