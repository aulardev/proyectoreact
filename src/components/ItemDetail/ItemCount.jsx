import React, { useState } from 'react'
import Item from '../ItemList/Item';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1);

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleClickMenos(){
        if(count > 1){
            setCount(count -1)
        }
    }

    useEffect(() => {
        
    }, [count])

    return (
        <div className='container'>
          <div className='count'>
             <button disabled={numero === 0} onClick={handleClickMenos}>-</button>
             <h3>{numero}</h3>
             <button disabled={numero === 5} onClick={handleClickMas}>+</button>
          </div>
          <button className="btn-add" onClick={() => onAdd(count)}> Agregar al Carrito </button> 
       </div>
       
       
  )
} 

export default ItemCount

