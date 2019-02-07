import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg bg-dark">
        <div className="row navRow">
          <div className="navContainer leftNav">
            <i className="brandIcon fab fa-pagelines fa-3x"></i>
            <Link className="navbar-brand" to="/">Plentiful</Link>
          </div>
          <div className="navContainer rightNav">
            <ul>
              <li className="navLinks"><a href="#"><span>Search</span><i className="fa fa-search fa-lg"></i></a></li>
              <li className="navLinks"><a href="#"><span>Login</span><i class="fa fa-user fa-lg"></i></a></li>
              <Link to="/cart">
                <li className="navLinks"><a href="#"><span>Cart</span><i class="fa fa-shopping-cart fa-lg"></i></a></li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
