import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReduxContainer from './container/ReduxContainer';
import ReduxContainerCalculator from './container/ReduxContainerCalculator';

import Menu from './component/menu'
class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Menu} />
          <Route path="/redux-counter" component={ReduxContainer} />
          <Route path="/redux-calculator" component={ReduxContainerCalculator} />
        </div>
      </Router>
    );
  }
}

export default App;
