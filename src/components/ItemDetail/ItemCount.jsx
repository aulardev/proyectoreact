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
          <div className='count'>
             <button disabled={numero === 0} onClick={handleDecrement}>-</button>
             <h3>{numero}</h3>
             <button disabled={numero === 5} onClick={handleIncrement}>+</button>
          </div>
          <button className="btn-add" >Add Cart</button>
       </div>
       
  )
} 

