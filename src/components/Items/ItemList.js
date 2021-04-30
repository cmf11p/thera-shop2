import React from 'react'
import Item from './Item'

export default function ItemList({ListProp}) {
    return(
        <div className="container itemContainer">
            <div className="row">
                {ListProp.map((item) => (
                    <div className="col-sm">
                        <Item key={item.id} Item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}