import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}