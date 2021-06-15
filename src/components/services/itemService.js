import db from './firebase'

const itemCollection = db.collection("items");

export function getItems() {
    return itemCollection.get()
    .then(querySnapShot=>{
        if(querySnapShot.size === 0) {
            console.log("No Results");
        }
        return querySnapShot.docs.map((doc) => {
            let data= doc.data();
            let extra={id:doc.id,...data}
            return extra
        })
    })
}

export function getFiltItems(filter) {
    const filteredList= itemCollection.where('categoryId','==',filter);
    return filteredList.get()
    .then(querySnapShot=>{
        if(querySnapShot.size === 0) {
            console.log("No Results");
        }
        return querySnapShot.docs.map((doc) => {
            let data= doc.data();
            let extra={id:doc.id,...data}
            return extra
        })
    })
}