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
  const { idcategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let miCollection;

    
    if (idcategory == undefined) {
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
  }, [idcategory]);

  return <ItemList products={products} />
}

