import React, { useContext, useState } from 'react';
import { cartContext } from '../context/CartProvider'



export default function ItemCount({product}) {
    const [count, setCount] = useState(1);
    const { cart } = useContext(cartContext);
    function sum(){
        if (count < product.stock)
      setCount(count +1 );
    }

    function res(){
        if (count > 1) {
        setCount(count -1 );
    }
    }
    function onAdd(){
        alert('Quiero agregar' + count + 'de este procucto' + JSON.stringify(product))
    }

  return (
    <div>
        <span onClick={sum}>+</span>
        {count}
        <span onClick={res}>-</span>
        <button onClick={onAdd} className='cart-btn'>Add to Cart</button>
    </div>
  )
}
