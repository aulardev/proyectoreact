import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore, } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Products from '../data/products.json'


export default function ItemDetailContainer() {

  const [product, setProduct] = useState({});
  const { idItem } = useParams();
  
  useEffect(()  => {
     const db = getFirestore();
     const refDoc = doc(db,'products', idItem);
  
     getDoc(refDoc).then((item) => { 
       const aux = { 
         ...item.data(), 
         id: item.id, 
       };
       setProduct(aux);
     });
  },[idItem]);  

  return <ItemDetail product={product}/>;
}

  /*
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

  return <ItemDetail product={(product)}/> 
}*/
