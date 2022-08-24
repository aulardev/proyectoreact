import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'


export default function ItemDetail({ product }) {
   const [goToCart, setGoToCart] = useState(false)
   const { addProduct } = useCartContext();

   const onAdd = (quantity) => {
      setGoToCart(true)
      addProduct(product, quantity)
   }

   return <div className='flex-box'>
      <div className='left'>
         <div>
            <img src={product.image} className='big-img' />
         </div>
      </div>

      <div className='right'>
         <div className='info-product'>
            <h2 className='pname'>{product.title}</h2>
            <p className='pprice'>${product.price}</p>
            <p>{product.description}</p>

         </div>
         <div className='btn-box'>
         <button onClick={onAdd} className='buy-btn'>Buy Now</button>
            <ItemCount product={product} />
         </div>
      </div>
   </div>;
}