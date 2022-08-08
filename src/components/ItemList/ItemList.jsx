import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Item from './Item';




export default function ItemList({products}) {
    return (
        <>
        
        <div className='item-product'>
            
        {products.map((producto) => (
            <Item key ={producto.id} producto ={producto} />
            
        ))}
        </div>
        
        </>
    )

  

}