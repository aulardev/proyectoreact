import React from 'react';
import Item from './Item';



export default function ItemList({products}) {
    return (
        <>
        
        <div className=''>
            
        {products.map((producto) => (
            <Item key ={producto.id} producto ={producto} />
            
        ))}
        </div>
        
        </>
    )

  

}
