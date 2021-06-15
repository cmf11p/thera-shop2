import {createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({defaultValue= [], children}){
    const [cart, setCart] = useState(defaultValue);
    const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

    function getFromCart (id){
        return cart.find(obj => obj.id == id)
    }

    function isInCart(id){
        return id === undefined ? undefined : getFromCart(id) !== undefined
    }

    function addToCart(obj){
        if(isInCart(obj && obj.id)) {
            console.log("Cannot add an exisiting obj to cart")
            return;
        }
        setCart([...cart, obj]);
    }

    function clearCart(){
        setCart([]);
    }

    function removeFromCart(id){
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    }

    useEffect(() => {
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const item of cart) {
				totalPrice = totalPrice + item.price * item.qty;
				totalItems += item.qty;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
		};
		Total();
	}, [cart]);

    return (
        <CartContext.Provider value={{cart,addToCart,isInCart,cartSize: cart.length,clearCart,removeFromCart,totalPrice,totalItems}}>
            {children}
        </CartContext.Provider>
    )
}