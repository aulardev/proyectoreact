import React, { createContext, useState} from 'react'

export const cartContext = createContext();

export default function CartComponent ({children}) {
  const [cart, setCart] = useState([{id: 10, name: "auricular"}]);
  
  function addToCart(item, count){
    
    console.log("item count agregando algo", item, count)
  }
  return (
    <cartContext.Provider value={{ cart, addToCart }}> 
      {children}
    </cartContext.Provider>
  );
}

