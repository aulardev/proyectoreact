import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../context/CartComponent'



export default function ItemCount({product}) {
    const [count, setCount] = useState(1);
    const {cart, addToCart}  = useContext(cartContext);
    
    function sum(){
        if (count < product.stock){
      setCount(count +1 );
    }
  }

    function res(){
        if (count > 1) {
        setCount(count -1 );
    }
    }
    function onAdd(){
       addToCart(product, count);
    }
        
     useEffect(()=>{
       console.log(cart);
     }, [cart])
  return (
    <>
       <div className='count-box'>  
          <button onClick={sum}>+</button>
            <span className='num'>{count}</span>     
          <button onClick={res}>-</button>
       </div>

         <div>
            <button onClick={onAdd} className='cart-btn'>Add to Cart</button>
        </div>
    </>
    
  )
}
