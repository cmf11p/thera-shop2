import React from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

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
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="products.html">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about_us.html">About Us</a>
          </li>
          <li className="nav-item">
            <CartWidget />
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