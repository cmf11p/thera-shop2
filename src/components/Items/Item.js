import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

export default function Item({Item}) {

    const onAdd = (count) => {
        alert(`${count} items have been added to cart`);
    };

    return(
        <div className="card">
            <Link to={`/item/${Item.id}`} style={{ textDecoration: 'none' }}>
                <div className="card-body">
                    <h4 className="card-title">{Item.title}</h4>
                    <p className="card-text">{Item.description}</p>
                </div>
            </Link>
            <ItemCount initial={1} stock={Item.stock} onAdd={onAdd} />
        </div>
    )
}