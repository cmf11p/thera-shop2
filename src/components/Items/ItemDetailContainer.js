import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const iditem = (item) => {return item.id == id};
    useEffect(() => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setItem(data.find(iditem)));    
    },[id]);

    return (
        <div>
            {<ItemDetail item={item} />}
        </div>
    )
}