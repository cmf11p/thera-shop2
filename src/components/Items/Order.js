import {useContext} from "react";
import { CartContext } from '../context/CartContext';
import { useLocation } from "react-router-dom";

export default function Order() {
    const { cart,totalPrice,totalItems } = useContext(CartContext);
    const location = useLocation();
    const param = location.state.state;
    return(
        <div style={{paddingTop:'100px'}} className="d-flex flex-column align-items-center">
            <h2 className="header-cart w-75">Orden Completada</h2>
            <div><p>Su orden fue procesada con exito</p></div>
            <div>ID de orden: {param}</div>
            <div className="w-75">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="itemscart">
                    {cart.map((itemu)=>(
                        <tr key={itemu.id}>
                            <th scope="row">{itemu.title}</th>
                            <td>{itemu.qty}</td>
                        <td>S/. <span>{(itemu.price*itemu.qty).toFixed(2)}</span></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    
                        <tr id="footer-carrito">
                            <th scope="row">Total</th>
                            <td>{totalItems}</td>
                            
                            <td className="font-weight-bold">S/. <span>{totalPrice}</span></td>
                        </tr>
                    
                </tfoot>
            </table>
            </div>
        </div>
        
    )
}