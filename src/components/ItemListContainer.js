import React,{useState,useEffect} from 'react';
import ItemList from './Items/ItemList';
import { getItems } from './services/itemService';

export default function ItemListContainer() {

    const [items,setItems] = useState([]);
    useEffect(() => {
        getItems()
        .then(data => setItems(data))
    },[])
    
    return(
        <div style={{paddingTop:'80px'}}>
            <ItemList ListProp={items}/>
        </div>  
    );
}