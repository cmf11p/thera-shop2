import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
    )
  }
}