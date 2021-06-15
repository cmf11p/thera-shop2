import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemListContainer2 from './components/ItemListContainer2'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import CartContainer from './components/Items/CartContainer'
import CheckOut from './components/Items/CheckOut'

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
            <ItemListContainer2 />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <CartContainer/>
          </Route>
          <Route path="/checkout">
            <CheckOut/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}