import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productos from '../data/products.json';


export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    
    const { productId } = useParams();

  
      useEffect(() => {
        const getItem = new Promise(resolve => {
          setTimeout(() => {
            resolve(Productos);
          }, 500);
        });
        getItem.then(res => setProduct(res.find(productD => productD.id === parseInt(productId))));
      }, [])

  return <>{JSON.stringify(product)}</> 
}
