import React from 'react'


export default function ItemDetail ({product}) {
 // "id":1,"type":"gamer","image":"../../src/assets/img1.jpg","title":"Auricular Beat","price":5700,"description":"Auricular ideal para gamers","stock":10
  return <div className='products-container'> 
            <img src={product.image} className='img-card'/>
            <h2 className='title'>{product.title}</h2>
            <p>{product.description}</p>
            <p className='price'>${product.price}</p>
            <button className="btn-add"  >Add to Cart</button>
        </div>;
}