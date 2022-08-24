import React from 'react'
import ItemCart from './ItemCart';

const Cart = () => {
  


  if (Cart.length === 0){
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
        Cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
      }
      <p className='price'>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart