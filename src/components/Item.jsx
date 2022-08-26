import React from 'react'
import { Link } from 'react-router-dom';


export default function Item({ producto }) {
    return (
        <div className='products-container'>
            <div className='item-card'>
                <div>
                    <Link to={`/product/${producto.id}`}><img src={producto.img} className='img-card' /></Link>

                </div>
                <div className='header-card'>
                    <h2 className='title'>{producto.name}</h2>
                    <p>{producto.description}</p>
                    <p className='price'>${producto.price}</p>
                    <p>Disponibles: {producto.stock}</p>

                    <Link to={`/product/${producto.id}`}><button className='btn-add'>Ver Detalles</button></Link>

                </div>

            </div>
        </div>
    );
}
