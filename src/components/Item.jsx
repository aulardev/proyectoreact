import React from 'react'
import { Link } from 'react-router-dom'; 



export default function Item ({ producto }) {
    return (
      <div className='products-container'> 
         <div className='item-card'>
             <div>
                <Link to={`/product/${producto.id}`}><img src={producto.image} className='img-card'  /></Link>
                
             </div>
              <div className='header-card'>
                    <h2 className='title'>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <p className='price'>${producto.price}</p>
                    <button className="btn-add"  >Add to Cart</button> 
                    <Link to={`/product/${producto.id}`}><button className='btn-add'>Ver Detalles</button></Link> 
                                            
             </div>
             
         </div>
    </div> 
    );
}
