import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer({ itemId }) {
    const [item, setItem] = useState([]);
    const iditem = (item) => {return item.id === itemId};
    useEffect(() => {
        setTimeout(() => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setItem(data.find(iditem)));
        }, 2000);
    }, []);

    return (
        <div>
            {<ItemDetail item={item} />}
        </div>
    )
}