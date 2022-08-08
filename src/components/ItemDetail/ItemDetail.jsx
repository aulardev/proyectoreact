import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
  return (
    <div className=''>
      <div className=''>
        <div>
            <img src={producto.image} alt="" className=''/>
        </div>
        <div className=''>
            <div className=''>{producto.title}</div>
            <div className=''>{producto.description}</div>
            <div className=''>${producto.price}</div>
            <ItemCount stock={producto.stock} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail