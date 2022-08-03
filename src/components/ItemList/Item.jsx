import React from 'react'



export default function Item ({ producto }) {
    return (
        <div className='item-product'>
            {JSON.stringify(producto)}
        </div>
    );
}