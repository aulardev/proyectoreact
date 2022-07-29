import React from 'react'

export default function Item ({ producto }) {
    return (
        <div style={{display: "grid cols-4", width: "20rem", height: "15rem", background:"grey", border:"1px solid black", padding: "30px", margin: "10px"}}>
            {JSON.stringify(producto)}
        </div>
    );
}