import React, {useContext} from "react";
import { CartContext } from '../context/CartContext';
import db from '../services/firebase'
import firebase from 'firebase'
import { useHistory } from "react-router-dom";

export default function CartContainer() {
    const { cart,totalPrice,totalItems } = useContext(CartContext);
    let history = useHistory();
    const handleSubmit = event => {     
        sendData();     
        event.preventDefault();
    };


    function sendData() {
        const ordena = {
            name: document.getElementById('user_name').value,
            phone: document.getElementById('user_tel').value,
            email: document.getElementById('user_email').value
        };
        newOrder(ordena,cart,totalPrice);
    }

    
    const orders = db.collection("orders")

    function newOrder(buyer,cart,total) {
        const newOrder = {
        buyer: buyer,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total
        };
        orders.add(newOrder).then(({id}) => {
            history.push('/order',{state:id});
        }).catch(err => {
            console.log("Error while sending the order", err);
        })
    }

    return(
        <div style={{paddingTop:'100px'}} className="d-flex flex-column align-items-center">
            <h2 className="header-cart w-75">Revise su Orden</h2>
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
                <h3>Ingrese sus datos</h3>
                </div> <div>
                <form action="#" name="form" onSubmit={handleSubmit} id="form">  
                    <div><label for="user_name">Nombre y Apellido: </label><input type='text' name='user_name' id='user_name' placeholder='Nombre' /></div>
                    <div><label for="user_tel">Telefono: </label><input type='tel' name='user_tel' id='user_tel' placeholder='00000000'/></div>
                    <div><label for="user_email">Email: </label><input type='email' name='user_email' id='user_email' placeholder='Email' /></div>
                    <div><input type='submit' value='Submit' /></div>
                </form>
            </div>
        </div>
        
    )
}