import React from 'react'
import { useState } from 'react'

export default function ItemDetail({ producto }) {
  
  const ItemDetail = ({producto, onclick}) => {
    const [stock, setStock] =useState(20)
    const [cantidad, serCantidad] =useState(1)

    const cambiarStock = () => {
      const number = Number(cantidad)
      setStock(stock - cantidad)
      onclick(number)
      setCantidad(0)
    }
    const bajarCantidad = () => {
      if (Cantidad > 0) {
        setCantidad(cantidad - 1)
      }
    }

  }

  return (
    <>
    <div className='item-product'>
        
        </div>

    </>
  )
}
