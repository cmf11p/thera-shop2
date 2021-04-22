import React from 'react';
import Greeting from './greeting/Greeting'

export default function ItemListContainer() {
    return(
        <div>
            <h1>Renderizado de la prop</h1>
            <Greeting greeting="Greeting"/>
        </div>
    );
}