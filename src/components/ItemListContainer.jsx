import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Products from '../data/products.json'


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    
    const { productType } = useParams();

    useEffect(() => {


  const miPromesa = new Promise ((res, rej) => {
    setTimeout(() => {
      if (!productType) res(Products);
      else res(Products.filter(product => product.type.includes (productType)))
    }, 2000);
  })
  
  miPromesa.then((res) => {
    setProducts(res);
  });

    },[productType]);

  return <ItemList products={products} />; 
}
