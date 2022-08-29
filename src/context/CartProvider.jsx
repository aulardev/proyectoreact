import React, { createContext, useState} from 'react'

export const cartContext = createContext();

export default function CartProvider ({children}) {
  const [cart, setCart] = useState([{id: 10, name: "auicular"}]);
  function addToCart(item, count){
   console.log("queriendo agrgar algo", item, count);
  }

  return (
    <cartContext.Provider value={{ cart, addToCart }}> 
      {children}
    </cartContext.Provider>
  );
}

