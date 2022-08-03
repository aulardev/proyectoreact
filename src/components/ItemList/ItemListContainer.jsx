import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    const { idCategory } = useParams();

    useEffect(() => {
  let productosHarcode = [
    { id: 1, name: "Auricular Beat", price: 5700, idCategory: "gamer",},
    { id: 2, name: "Camara logitech", price: 3820, idCategory: "gamer"},
    { id: 3, name: "Procesador Core I5", price: 35000, idCategory: "computacion"},
    { id: 4, name: "Auricular Sony", price: 6800, idCategory: "computacion"},
    { id: 5, name: "Auricular Sony", price: 6500, idCategory: "computacion"},
    { id: 6, name: "Camara Logitech", price: 4100, idCategory: "gamer"},
  ];

  const miPromesa = new Promise ((res, rej) => {
    setTimeout(() => {
      if (!idCategory) {
      res(productosHarcode);
    } else {
      res(productosHarcode.filter((producto) => producto.idCategory === idCategory));
    }
  }, 2000);
  });
  
  miPromesa.then((res) => {
    setProductos(res);
  });

    },[idCategory]);

  return <ItemList productos={productos}/>; 
}

