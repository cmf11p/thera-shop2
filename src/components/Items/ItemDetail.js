import React from "react";
import "./ItemDetail.css";

export default function ItemDetail({ item }) {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{item.title}</h1>
                <p className="lead">{item.description}</p>
                <img src={item.picUrl} alt={item.title} />
                <h4>Precio: S/. {item.price}</h4>
            </div>
        </div>
    );
}