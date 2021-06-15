import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartContainer() {
    const { cart,clearCart,removeFromCart } = useContext(CartContext);

    return(
        <div style={{paddingTop:'100px'}}>
            <h2 className="header-cart">Carro de Compras</h2>
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="itemscart">
                    {cart.map((itemu)=>(
                        <tr key={itemu.id}>
                            <th scope="row">{itemu.id}</th>
                            <td>{itemu.title}</td>
                            <td>{itemu.qty}</td>
                            <td>
                                
                                <button onClick={()=>removeFromCart(itemu.id)} className="btn btn-warning btn-sm action-button">
                                    Borrar
                                </button>
                            </td>
                        <td>S/. <span>{itemu.price}</span></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    { cart === [] ? 
                        <tr id="footer-carrito">
                            <th className="empty-cart" scope="row" colSpan="5">Carro vacio</th>
                        </tr>
                    :
                        <tr id="footer-carrito">
                            <th scope="row" colSpan="2">Total</th>
                            <td>{}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar
                                </button>
                            </td>
                            <td className="font-weight-bold">S/. <span>{}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
            </div>
            <button type="button" className="return-button btn btn-warning">
                <Link to={`/`} className="link-text">Seguir comprando</Link>
            </button>
        </div>
    )
}