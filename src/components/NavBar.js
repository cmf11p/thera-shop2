import React from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'
import { NavLink,Link } from 'react-router-dom';

export default function NavBar() {
    var NaviBar = <nav className="navbar navbar-nav navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <Link to="/" className="navbar-brand">Thera</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <span><NavLink to={"/category/Phones"} className="nav-link" activeClassName="active">Phones</NavLink></span>
          </li>
          <li className="nav-item">
          <span><NavLink to={"/category/Tablets"} className="nav-link" activeClassName="active">Tablets</NavLink></span>
          </li>
          <li className="nav-item">
          <span><NavLink to={"/category/Laptops"} className="nav-link" activeClassName="active">Laptops</NavLink></span>
          </li>
          <li className="nav-item">
            <Link to="/cart">
            <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> ;
  return(
      <div>
          {
              NaviBar
          }
      </div>
  )
}