import React, { useState } from 'react';

   
  
export default function ItemCount({product}) {
    const [count, setCount] = useState(1);
    function sum(){
        if (count < product.stock)
      setCount(count+1);
    }

    function res(){
        if (count > 1) {
        setCount(count-1);
    }
    }
    function onAdd(){
        alert('Quiero agregar' + count + 'de este procucto' + JSON.stringify(product))
    }

  return (
    <div>
        <span style={{ cursor: "pointer"}} onClick={sum}>+</span>
        {count}
        <span style={{ cursor: "pointer"}} onClick={res}>-</span>
        <button onClick={onAdd} className='cart-btn'>Add to Cart</button>
    </div>
  )
}


