import React, {useContext} from "react";
import {newOrder} from '../services/itemService'
import { CartContext } from '../context/CartContext';

export default function CartContainer() {
    const { cart,totalPrice,totalItems } = useContext(CartContext);

    const handleSubmit = event => {     
        addData();     
        event.preventDefault();
    };

    function addData() {
        const ordena = {
            name: document.getElementById('user_name').value,
            phone: document.getElementById('user_tel').value,
            email: document.getElementById('user_email').value
        };
        
        newOrder(ordena,cart,totalPrice);
    }

    return(
        <div style={{paddingTop:'100px'}} className="d-flex flex-column align-items-center">
            <h2 className="header-cart w-75">Carro de Compras</h2>
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
            <div className="w-75 container">
                <form action="#" name="form" onSubmit={handleSubmit} id="form">  
                    <div><label for="user_name">Nombre y Apellido: </label><input type='text' name='user_name' id='user_name' placeholder='Name' /></div>
                    <div><label for="user_tel">Telefono: </label><input type='tel' name='user_tel' id='user_tel' placeholder='00000000'/></div>
                    <div><label for="user_email">Email: </label><input type='email' name='user_email' id='user_email' placeholder='Email' /></div>
                    <div><input type='submit' value='Submit' /></div>
                </form>
            </div>
        </div>
        
    )
}