import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getItems } from '../services/itemService';

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [loading,setLoading] = useState(false)
    const iditem = (item) => {return item.id == id};
    useEffect(() => {
        setLoading(true);
        getItems()
            .then((data) => setItem(data.find(iditem)))
            .finally(setLoading(false))    
    },[]);

    return (
            <div>
                {<ItemDetail item={item} />}
                <p>{loading}</p>
            </div>
    )
    
}