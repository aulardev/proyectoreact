import React from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  
  return (
    <div>
      <Link to='/cart'>
        <ion-icon className="cart-icon" name="cart-outline"></ion-icon>
     </Link>
     
    </div>
  )
}

export default CartWidget