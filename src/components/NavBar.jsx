import React from 'react'



const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="#" className="nav__brand">Football Shop</a>
        <ul className="nav__menu">
          <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Shop</a></li>
          
          
        </ul>
        <div>
        
           <ion-icon className="cart-icon"  name="cart-outline"></ion-icon>
        </div>
      </nav>
    
    </div>
  )
}

export default NavBar