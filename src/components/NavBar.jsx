import React from 'react'


const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="#" className="nav__brand">Ecommerce</a>
        <ul className="nav__menu">
          <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Shop</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
        </ul>
        <div className='nav__toggler'>
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
        </div>
      </nav>
    
    </div>
  )
}

export default NavBar