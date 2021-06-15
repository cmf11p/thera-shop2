import React,{useState,useEffect} from 'react';
import ItemList from './Items/ItemList';

export default function ItemListContainer() {
    
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);
    
    return(
        <div style={{paddingTop:'80px'}}>
            <ItemList ListProp={items}/>
        </div>  
    );
}