import React from 'react';



const ItemCart = ({product}) => {
    

  return (
    <div className=''>
        <div className='item-card'>
            <img src={product.image} alt={product.title} className=''/>
        </div>
        <div className=''>
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