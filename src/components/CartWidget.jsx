import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartComponent'

export default function CartWidget() {
  const { totalCount } = useContext(cartContext)


  
  return (
    <div>
      <div>
      <span>{totalCount}</span>
      </div>
      <Link to='/cart'>
        <ion-icon className="cart-icon" name="cart-outline"></ion-icon>
     </Link>
     
    </div>
  )
  }

