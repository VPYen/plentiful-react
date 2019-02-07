import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Cart from '../cart/Cart';

const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </main>
  )
}

export default Main;
