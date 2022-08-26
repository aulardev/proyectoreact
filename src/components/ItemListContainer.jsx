import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Products from '../data/products.json'


export default function ItemListContainer() {

  const [products, setProducts] = useState([]);
  useEffect(()  => {
     const db = getFirestore();
     const miCollection = collection(db, "products");

     getDocs(miCollection).then((data) => {
      const auxProducts = data.docs.map(product => ({ 
        ...product.data(), 
        id: product.id, 
     }));

     setProducts(auxProducts);
  });
  },[]);

  return <ItemList products={products}/>
}
    




 /* const miPromesa = new Promise ((res, rej) => {
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
}*/
