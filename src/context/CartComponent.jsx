import { arrayRemove } from 'firebase/firestore';
import React, { createContext, useEffect, useState} from 'react'

export const cartContext = createContext();

export default function CartComponent ({children}) {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);
  
  function addToCart(item, count){
    
    const cartAux = [...cart];

    let inTheCart = false;

    for (let i = 0; i < cartAux.length; i++) {
      if (cartAux[i].id == item.id) {
        cartAux[i].count = cartAux[i].count + count; 
        inTheCart = true; 
      }
    }
    if (!inTheCart){
      cartAux.push({...item, count});
    }
    setCart(cartAux);
  }

  function deleteFromCart(id){
    setCart(cart.filter(item=> item.id != id));
  }

  function deleteAllFromCart(){
    setCart([]);
  }

  useEffect(()=>{
    setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
    setTotalToPay(cart.reduce((acc, item) => acc + item.count * item.price, 0));
  }, [cart]);

 
  return (
    <cartContext.Provider value={{ 
      cart, 
      addToCart, 
      totalCount, 
      totalToPay, 
      deleteFromCart, 
      deleteAllFromCart, 
      }}
      > 
      {children}
    </cartContext.Provider>
  );
}

