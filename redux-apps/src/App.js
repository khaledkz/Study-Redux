import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReduxContainer from './container/ReduxContainer';
import ReduxContainerCalculator from './container/ReduxContainerCalculator';
import ReduxCoffeMangment from './container/coffeMangment/ReduxCoffeMangment';

import CoffeSetPricess from './container/coffeMangment/CoffeSetPricess';
import CoffeOrder from './container/coffeMangment/CoffeOrder';
import ViewPrice from './component/coffe/viewPrice'
import Menu from './component/menu'
class App extends Component {
  render() {

    return (  
      <Router>
        <div className="App">
          <Route exact path="/" component={Menu} />
          <Route path="/redux-counter" component={ReduxContainer} />
          <Route path="/redux-calculator" component={ReduxContainerCalculator} />
          <Route path="/redux-coffe-mangment" component={ReduxCoffeMangment} />
          <Route path="/redux-coffe-mangment/set-price" component={CoffeSetPricess} />
          <Route path="/redux-coffe-mangment/view-price" component={ViewPrice} />
          <Route path="/redux-coffe-mangment/newOrder" component={CoffeOrder} />
          
        </div>
      </Router>
    );
  }
}

export default App;
