import React from 'react'
import ItemCount from '../ItemDetail/ItemCount';
import { Link } from 'react-router-dom'; 



export default function Item ({ producto }) {
    return (
        <div className='item-card'>
             <div>
                <Link to={`/product/${producto.id}`}><img src={producto.image} className='img-card' /></Link>
             </div>
              <div className='header-card'>
                    <h2 className='title'>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <p className='price'>${producto.price}</p>
                    <span><ItemCount stock={producto.stock}/></span>
             </div>
        </div>
    );
}