
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu= ()=>(
    <div>
        <h1> Redux Training App's </h1>
        <Link to='/redux-counter'><h3>Counter</h3></Link>
        <Link to='/redux-calculator'><h3>Calculator</h3></Link>
        <Link to='/redux-coffe-mangment'><h3>coffe Mangment</h3></Link>
    </div>
)

export default Menu