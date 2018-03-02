import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReduxContainer from './container/ReduxContainer';
import Menu from './component/menu'
class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Menu} />
          <Route path="/redux-counter" component={ReduxContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
