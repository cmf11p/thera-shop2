import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({Item}) {

    return(
        <div className="card">
            <Link to={`/item/${Item.id}`} style={{ textDecoration: 'none' , color:'black'}}>
                <div className="card-body">
                    <h4 className="card-title">{Item.title}</h4>
                    <p className="card-text">{Item.description}</p>
                </div>
            </Link>
        </div>
    )
}