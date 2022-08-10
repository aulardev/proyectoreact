import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  const [cart, setCart] = useState(false);
  const [cantidad, setCantidad] = useState();

     const onAdd = (count) => {

     }
   return (
    <div className='container'>
      <div className='item-product'>
        <div>
            <img className='img-product' src={producto.image} alt=""/>
        </div>
        <div className=''>
            <div className=''>{producto.title}</div>
            <div className=''>{producto.description}</div>
            <div className=''>${producto.price}</div>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail