import React, { useEffect, useState } from 'react';
import Item from './Item';

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
        <div>
            <div className=''>
                <div className='' onClick={handleClickMenos}><Item/></div>
                <div className='' >{count}</div>
                <div className='' onClick={handleClickMas}><Item/></div>
            </div>
            <button className='' onClick={() => onAdd(count)}>Agregar al Carrito</button>        </div>
    )
} 

export default ItemCount

