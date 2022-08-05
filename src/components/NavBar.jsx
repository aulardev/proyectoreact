import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar () {


  return (
    <div>
      <nav className="nav">
        <a href="#" className="nav__brand">Ecommerce Tech Shop</a>
        <ul className="nav__menu">
          <Link to={'/'} >Home</Link>
          <Link to="/category/gamer">Gamer</Link>
          <Link to="/category/computacion">Computación</Link>
          
        </ul>
        <div>
        
        <ion-icon className="cart-icon"  name="cart-outline"></ion-icon>
       
        </div>
      </nav>
    
    </div>
  )
}

