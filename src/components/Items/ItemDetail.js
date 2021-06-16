import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from '../context/CartContext';

export default function ItemDetail({ item }) {
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(0);
    const onAdd = (qtyAdd) => {
        alert(`${qtyAdd} items have been added to the cart.`);
        setQty(qtyAdd);
        item.qty=qtyAdd;
        addToCart(item);
    };

    return (
        <div className="container" style={{paddingTop:'100px'}}>
            <div className="jumbotron d-flex flex-column">
                <h1 className="display-4">{item.title} <span className="badge bg-secondary rounded-pill">In Stock: {item.stock}</span></h1>
                <p className="lead">{item.description}</p>
                <img src={item.picUrl} alt={item.title} className="imagedet"/>
                <h4>Precio: S/. {item.price} </h4>
                <div className="d-flex justify-content-center flex-fill">
                {qty > 0 ? (
                    <Link className="item-detail-buy-btn" to={"/cart"}>
                        <button type="button" className="btn btn-primary">
                                Buy Now
                        </button>
                    </Link>
                ) : (
                    <ItemCount initial={0} stock={item.stock} onAdd={onAdd} />
                )}
                </div>
            </div>
        </div>
    );
}