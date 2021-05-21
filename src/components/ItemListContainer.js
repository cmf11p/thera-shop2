import React,{useState,useEffect} from 'react';
import Greeting from './greeting/Greeting'
import ItemList from './Items/ItemList';

export default function ItemListContainer() {
    
    const [items,setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => setItems(data));
        }, 2000);
    }, []);
    
    return(
        <div>
            <div>
                <h1>Renderizado de la prop</h1>
                <Greeting greeting="Greeting"/>
            </div>
            <ItemList ListProp={items}/>
        </div>  
    );
}