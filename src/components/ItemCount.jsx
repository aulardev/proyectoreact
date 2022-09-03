import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartComponent'



export default function ItemCount({ product }) {
  const [count, setCount] = useState(0);
  const [removeButton, setRemoveButton] = useState(false);
  const { cart, addToCart } = useContext(cartContext);

  function sum() {
    if (count <= product.stock) {
      setCount(count + 1);
    }
  }

  function res() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function onAdd() {
    addToCart(product, count);
    setRemoveButton(true);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])
  return (
    <>
      <div className='count-box'>
        <span onClick={sum}>+</span>
        <span className='num'>{count}</span>
        <span onClick={res}>-</span>
      </div>

      <div>
        {removeButton ? (
          <>
            "Producto agregado.."
            <Link to="/"> <button onClick={onAdd} className='cart-btn'>Seguir comprando</button> </Link>
            <Link to="/checkout"> <button onClick={onAdd} className='cart-btn'>Terminar compra</button></Link>
          </>
        ) : (
          <button onClick={onAdd} className='cart-btn'>Add to Cart</button>
        )}
      </div>
    </>

  );
}
