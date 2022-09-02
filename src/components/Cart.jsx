import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartComponent';

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } = 
  useContext(cartContext);
  return (
  <>
    {cart.map((item) => (
         <div key={item.id}> 
           {item.name + " " + item.count}{" "} 
           <span onClick={()=> deleteFromCart(item.id)}>🗑️</span>
         </div>
    ))}

    <div> 
      Tienes en el carro: {totalCount} a pagar: {totalToPay} 
    </div>
    
    <Link to="/checkout">Finalizar tu compra!</Link>
 </>
  )
};
  
 

  
  