import React from 'react'
import Item from './Item'

export default function ItemList({ListProp}) {
    return(
        <div className="container itemContainer">
            <div className="row">
                {ListProp.map((item) => (
                    <div className="col-sm" key={item.id}>
                        <Item Item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}