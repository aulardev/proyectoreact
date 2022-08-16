import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();


  if (cart.length === 0){
    return (
      <div className='container'>
        <p className='title'>No hay elementos en el carrito</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className=''>
        <p className='title'>Producto</p>
        <p className='title'>Cant</p>
        <p className='title'>Precio</p>
        <p className='title'>Subtotal</p>
      </div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p className='price'>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart