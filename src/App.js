import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer itemId={3}/>
      </div>
    )
  }
}