import React from 'react'
import { Link } from 'react-router-dom';


export default function Item({ product }) {
    return (
        <div className='products-container'>
            <div className='item-card'>
                <div>
                    <Link to={'/item/' + product.id}><img src={product.img} className='img-card' /></Link>

                </div>
                <div className='header-card'>
                    <h2 className='title'>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className='price'>${product.price}</p>
                    <p>Disponibles: {product.stock}</p>

                    <Link to={'/item/' + product.id }><button className='btn-add'>Ver Detalles</button></Link>

                </div>

            </div>
        </div>
    );
}
