import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Item from './Item';


export default function ItemList({productos}) {
    return (
        <>

        <div className='item-product'>
        {productos.map((producto) => (
            <Item key ={producto.id} producto ={producto.name} img ={producto.img} />
        ))}
        </div>
        </>
    )
}





