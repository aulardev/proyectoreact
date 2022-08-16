import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useCartContext } from '../../context/CartContext';



const ItemDetail = ({producto, count}) => {
  
  const [cart1, setCart1] = useState(false);
  
  const {addItem} = useCartContext();

     const onAdd = (count) => {
      console.log ({
        title: 'productoagregado'
      })
     }
    setCart1(true);
    addItem (producto, count);

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
            <Link to='/cart'><button className='"btn-add"'>Finalizar compra</button></Link> 
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail