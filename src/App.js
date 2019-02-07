import React, { Component } from 'react';
import './App.css';

import Main from './components/main/Main';
import NavBar  from './components/navbar/NavBar';
import Background from './components/background/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
