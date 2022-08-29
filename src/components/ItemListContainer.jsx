import React, { useEffect, useState } from 'react'
import { 
  collection, 
  getDocs, 
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Products from '../data/products.json'


export default function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {idcategory} = useParams();
  
  useEffect(()  => {
     const db = getFirestore();
     let miCollection;
     
    //si estoy en home o ruta sin params de categoria definidos
     if (idcategory == undefined){ 
      miCollection = collection(db, "products");
      
} else {
  miCollection = query(
    collection(db, "products"), 
    where("idcategory", "==", idcategory)
  );
}

  getDocs(miCollection).then((data) => {
    const auxProducts = data.docs.map((product) => ({ 
      ...product.data(), 
      id: product.id, 
   }));

   setProducts(auxProducts);
});
},[idcategory]);  

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
