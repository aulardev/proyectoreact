import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Products from '../data/products.json'


export default function ItemListContainer() {
  useEffect(()  => {
     const db = getFirestore();
     const miCollection = collection(db, "products");

     getDocs(miCollection).then((data) => {
      console.log(data.docs[0].data());
      console.log(data.docs[0].id);
      console.log({ ...data.docs[0].data(), id: data.docs[0].id});

      const auxProducts = data.docs.map(product => ({ 
        ...product.data(), 
        id: product.id, 
     }));
  });
  },[]);

  return <div>list container</div>
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
