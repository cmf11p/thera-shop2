import React,{useContext} from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext";

export default function NavBar() {
  const {totalItems} = useContext(CartContext);
  let extra=null;
  if (totalItems!==0) {
    extra=<li className="nav-item">
    <Link to="/cart">
    <CartWidget />
    </Link>
  </li>
  }
  else {extra=null}
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
          {extra}
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