import React from 'react'
import ItemCount from '../ItemDetail/ItemCount';
import { Link } from 'react-router-dom'; 



export default function Item ({ producto }) {
    return (
        <div className='item-product'>
            <Link to={`/product/${producto.id}`}><img src={producto.image} className='img-product' /></Link>
                            <Link to={`/product/${producto.id}`}><h1 className='title'>{producto.title}</h1></Link>
                            <p className='h3'>${producto.price}</p>
                            <p className='copy'>{producto.description}</p>
                            <ItemCount stock={producto.stock}/>
    
        </div>
    );
}