import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartContainer() {
    const { cart,clearCart,removeFromCart,totalPrice,totalItems } = useContext(CartContext);
    console.log(cart);

    return(
        <div style={{paddingTop:'100px'}} className="d-flex flex-column align-items-center">
            <h2 className="header-cart w-75">Carro de Compras</h2>
            <div className="w-75">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="itemscart">
                    {cart.map((itemu)=>(
                        <tr key={itemu.id}>
                            <th scope="row">{itemu.title}</th>
                            <td>{itemu.qty}</td>
                            <td>
                                
                                <button onClick={()=>removeFromCart(itemu.id)} className="btn btn-warning btn-sm action-button">
                                    Borrar
                                </button>
                            </td>
                        <td>S/. <span>{(itemu.price*itemu.qty).toFixed(2)}</span></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    { cart.length===0 ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="4">Carro vacio</th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <th scope="row">Total</th>
                            <td>{totalItems}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar
                                </button>
                            </td>
                            <td className="font-weight-bold">S/. <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
            </div>
            <button type="button" className="return-button btn btn-warning mb-3">
                <Link to={`/`} className="link-text" style={{color:'black'}}>Seguir comprando</Link>
            </button>
            <button type="button" className="return-button btn btn-primary mb-3">
                <Link to={`/checkout`} className="link-text" style={{color:'black'}}>Checkout</Link>
            </button>
        </div>
    )
}