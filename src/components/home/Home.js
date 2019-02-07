import React, { Component } from 'react';
import './Home.css';

import Background from '../background/Background';

class Home extends Component {
  render() {
    return(
      <div className="fadeElement homeContainer">
        <Background />
        <div className="row mainAdRow">
          <h1>Your One Stop Shop for All things Clothes</h1>
        </div>
        <div className="row categoryRow">
          <div className="category"><h4>Men</h4></div>
          <div className="category"><h4>Women</h4></div>
          <div className="category"><h4>Kids</h4></div>
          <div className="category"><h4>Toddlers</h4></div>
        </div>
      </div>
    )
  }
}

export default Home;
