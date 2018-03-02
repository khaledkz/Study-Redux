import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterActions from '../redux/actions/counterFunction.js/action';

class ReduxContainer extends Component {

    render() {
        return (
            <div>
                <h1>Redux Counter</h1>
                <h2>{this.props.counter}</h2>
                <button onClick={CounterActions.Incremant}>Increment</button>
                <button onClick={CounterActions.Decremant}>Decrement</button>
                <button onClick={CounterActions.dublicate}>Dublicate</button>
                <button onClick={CounterActions.reset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        flats: state.flats,
        age: state.age,
        counter:state.counter
    }

}

export default connect(mapStateToProps)(ReduxContainer);