import React from 'react';
import { useCartContext } from '../context/CartContext';


const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();

  return (
    <div className=''>
        <div className='item-card'>
            <img src={product.image} alt={product.title} className=''/>
        </div>
        <div className='flex items-center'>
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>${product.price}</p>
            <p>${product.quantity * product.price}</p>
            <div>
                <button onClick={() => removeItem(product.id)} className='btn-add'>Remove</button>
            </div> 
        </div>
    </div>
  )
}

export default ItemCart