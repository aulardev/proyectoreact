import React from 'react';
import ItemCount from './ItemCount';


export default function ItemDetail({ product }) {

   return (
      <div className='flex-box'>
         <div className='left'>
            <div>
               <img src={product.img} className='big-img' />
            </div>
         </div>

         <div className='right'>
            <div className='info-product'>
               <h2 className='pname'>{product.name}</h2>
               <p> {product.description}</p>
               <br />
               <p className='pprice'>Precio: ${product.price}</p>
               <p>Disponibles: {product.stock}</p>
            </div>

            <div>
               <ItemCount product={product} />
            </div>
         </div>
      </div>);
}