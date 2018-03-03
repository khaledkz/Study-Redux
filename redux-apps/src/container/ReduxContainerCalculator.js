import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/calculator.css';
import calculatorAction from '../redux/actions/calculator/calculatorAction'
class ReducCalculator extends Component {
    componentDidMount() {
     }

    render() {
        let numberValue = document.getElementById('calcValue')
        if(this.props.calculator.result>0){
            return (
                <div>
                    <h1>Calculator Redux app </h1>
                    <p>{this.props.calculator.formula}</p>
                    <input type="text"   value={this.props.calculator.result}/>
                    <div className="myCalculator">
                        <div className="calculatorButtons">
    
                            <button onClick={calculatorAction.number} value='1' >1</button>
                            <button onClick={calculatorAction.number} value='2'>2</button>
                            <button onClick={calculatorAction.number} value='3'>3</button>  <br />
    
                            <button onClick={calculatorAction.number} value='4'>4</button>
                            <button onClick={calculatorAction.number} value='5'>5</button>
                            <button onClick={calculatorAction.number} value='6'>6</button>  <br />
    
                            <button onClick={calculatorAction.number} value='7'>7</button>
                            <button onClick={calculatorAction.number} value='8'>8</button>
                            <button onClick={calculatorAction.number} value='9'>9</button>  <br /> <br />
    
                            <button onClick={calculatorAction.operator} value="+" >+</button>
                            <button onClick={calculatorAction.operator} value="-">-</button>
                            <button onClick={calculatorAction.operator} value="*">x</button>
                            <button onClick={calculatorAction.operator} value="/">/</button>
                            <button onClick={calculatorAction.clear} value="c">c</button>
                            <button onClick={calculatorAction.operator} value="=">=</button>
    
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>Calculator Redux app </h1>
                    <p>{this.props.calculator.formula}</p>
                    <input type="text"   value={this.props.calculator.screenresult}/>
                    <div className="myCalculator">
                        <div className="calculatorButtons">
    
                            <button onClick={calculatorAction.number} value='1' >1</button>
                            <button onClick={calculatorAction.number} value='2'>2</button>
                            <button onClick={calculatorAction.number} value='3'>3</button>  <br />
    
                            <button onClick={calculatorAction.number} value='4'>4</button>
                            <button onClick={calculatorAction.number} value='5'>5</button>
                            <button onClick={calculatorAction.number} value='6'>6</button>  <br />
    
                            <button onClick={calculatorAction.number} value='7'>7</button>
                            <button onClick={calculatorAction.number} value='8'>8</button>
                            <button onClick={calculatorAction.number} value='9'>9</button>  <br /> <br />
    
                            <button onClick={calculatorAction.operator} value="+" >+</button>
                            <button onClick={calculatorAction.operator} value="-">-</button>
                            <button onClick={calculatorAction.operator} value="*">x</button>
                            <button onClick={calculatorAction.operator} value="/">/</button>
                            <button onClick={calculatorAction.operator} value="c">c</button>
                            <button onClick={calculatorAction.operator} value="=">=</button>
    
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    console.log(state.calculator)
    return {
        calculator: state.calculator
    }

}

export default connect(mapStateToProps)(ReducCalculator);