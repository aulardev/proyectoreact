import React from 'react'
import ItemCount from '../ItemDetail/ItemCount';
import { Link } from 'react-router-dom'; 



export default function Item ({ producto }) {
    return (
      <div className='products-container'> 
         <div className='item-card'>
             <div>
                <Link to={`/product/${producto.id}`}></Link>
                <img src={producto.image} className='img-card' />
             </div>
              <div className='header-card'>
                    <h2 className='title'>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <p className='price'>${producto.price}</p>
                    <button className="btn-add" >Add to Cart</button>                          
             </div>
             
         </div>
    </div> 
    );
}