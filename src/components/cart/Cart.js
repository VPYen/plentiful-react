import React, { Component } from 'react';
import './Cart.css';


class Cart extends Component {
  render() {
    return(
      <div className="cartComponent">
        <div className="cartContainer">
          <h5>Shopping Cart</h5>
          <hr />
        </div>
        <div className="checkoutContainer">
          <h5>Checkout</h5>
          <hr />
        </div>
      </div>
    )
  }
}

export default Cart;
