import React, { useState }  from 'react'
import './ItemCount.css'

export default function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(initial);
    const incCount = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };
    const decCount = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    return (
        <div className="d-flex flex-fill flex-column">
            <div className="card-body d-flex justify-content-center">
                <button onClick={decCount} className="btn btn-danger">-</button> 
                <p className="count-box align-self-center">{count}</p>
                <button onClick={incCount} className="btn btn-primary">+</button>
            </div>
            <div className="card-body text-center">
                <button onClick={ count <= stock ? () => onAdd(count)  : () => alert("Out of stock.")} className="btn btn-success">Agregar al carrito</button>
            </div>
        </div>
    )
} 