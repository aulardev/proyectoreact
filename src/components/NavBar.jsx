import React from 'react'
import NavBar from "./components/NavBar"

const NavBar = () => {
  return (
    <div>
        <nav className="nav">
         <a href="#" className="brand">aular ecommerce</a>
         <ul className="nav__menu">
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Shop</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
         </ul>
        </nav>
    </div>
  )
}

export default NavBar