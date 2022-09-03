import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartComponent';

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } =
    useContext(cartContext);
  return (
    <>
      <h2>CHEQUEA TU COMPRA</h2>
      <div className='flex-box'>

        {cart.map((item) => (
          <div key={item.id}>
            {item.name + " " + item.count}{" "}
            <span onClick={() => deleteFromCart(item.id)}> 🗑️ Eliminar producto</span>
          </div>
        ))}

      </div>

      <div className='flex-box'>
        Unidades: {totalCount}
      </div>
      <div className='flex-box'>
        Total a pagar: ${totalToPay}
      </div>

      <div className='final-btn'>
        <Link to="/checkout">  Finalizar la compra!</Link>
      </div>
    </>
  )
};




