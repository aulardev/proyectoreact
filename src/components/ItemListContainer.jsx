import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
  let productosHarcode = [
    { id: 01, name: "camisa argentina", price: 9000},
    { id: 02, name: "campera river", price: 7000},
    { id: 03, name: "camisa river", price: 9000},
    { id: 04, name: "camisa boca", price: 9000},
    { id: 05, name: "camisa san lorenzo", price: 9000},
    { id: 06, name: "campera racing", price: 9000},
  ];

  const miPromesa = new Promise ((res, rej) => {
    setTimeout(() => {
      res(productosHarcode);
  }, 2000);
  });
  
  miPromesa.then((res) => {
    setProductos(res);
  });

    },[]);

  return <ItemList productos={productos}/>; 
}


  /*return (
    <>
     <ProductList />
     <div className='container'> 
          <div className='products-heading'> 
           Seller Products 
          </div>
         <p className='text'>Everything all you need </p>
 
            <div>Products</div>       
     </div>
    </>
  )
}

export default ItemListContainer*/
