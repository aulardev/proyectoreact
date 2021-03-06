import React, { useState } from 'react'

export default function ItemCount() {

    const [numero, setNumero] = useState(0)

    function handleDecrement () {
        setNumero(numero-1)
    }

    function handleIncrement () {
        setNumero(numero+1)
    }

    return (
        <div className='container'>
          <div className='product-box'>
             <h2>Item count</h2>

             <button disabled={numero === 0} onClick={handleDecrement}>-</button>
             <h3>{numero}</h3>

             <button disabled={numero === 5} onClick={handleIncrement}>+</button>

             <button className="counter" >Add Cart</button>
          </div>
       </div>
  )
} 

