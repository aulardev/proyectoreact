import React from 'react'
import ItemCount from './ItemCount';


export default function ItemDetail ({product}) {
 // "id":1,"type":"gamer","image":"../../src/assets/img1.jpg","title":"Auricular Beat","price":5700,"description":"Auricular ideal para gamers","stock":10
  return <div className='flex-box'> 
                <div className='left'> 
                    <div> 
                     <img src={product.image}  className='big-img'/>
                     </div>
                </div>

                <div className='right'>
                  <div className='info-product'>
                     <h2 className='pname'>{product.title}</h2>
                     <p className='pprice'>${product.price}</p>
                     <p>{product.description}</p> 
                     
                  </div>
                  <div className='btn-box'>
                     <button className='buy-btn'>Buy Now</button>
                     <ItemCount product={product}/>
                  </div>
              </div>       
        </div>;
}