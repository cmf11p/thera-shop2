import React,{useState,useEffect} from 'react';
import ItemList from './Items/ItemList';
import { getFiltItems } from './services/itemService';
import { useParams } from 'react-router-dom'

export default function ItemListContainer2() {

    const [items,setItems] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getFiltItems(id)
        .then(data => setItems(data))
    },[id])
    
    return(
        <div style={{paddingTop:'80px'}}>
            <ItemList ListProp={items}/>
        </div>  
    );
}