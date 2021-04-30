import React from 'react';
import Greeting from './greeting/Greeting'
import ItemCount from './Items/ItemCount'

export default function ItemListContainer() {
    const onAdd = (count) => {
        alert(`${count} items have been added to cart`);
    };
    return(
        <div>
            <h1>Renderizado de la prop</h1>
            <Greeting greeting="Greeting"/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    );
}