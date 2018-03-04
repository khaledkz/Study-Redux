import React from 'react';
import { connect } from 'react-redux'
import '../css/viewPrice.css'

const CoffeViewPrice = (props) => {
    console.log(props.state)
    return (
        <div className="view-prices">
            <h1>View Prices</h1>

            <div className="box">
                <h3>Coffe Prices List</h3>
                <ul>
                    {props.coffe.map((x) => {
                        if (x.kind === "coffe") {
                            return <li key={x.id}>{x.name}: <span>£{x.price}</span>.</li>
                        }else{
                            return  ''
                        }
                    })}
                </ul>
            </div>

            <div className="box">
                <h3>Cake Prices List</h3>

                <ul>

                    {props.coffe.map((x) => {
                        if (x.kind === "cake") {
                            return <li key={x.id}>{x.name}: <span>£{x.price}</span>.</li>
                        }else{
                            return  ''
                        }
                    })}

                </ul>

            </div>

            <div className="box">
                <h3>Drink Prices List</h3>

                <ul>

                    {props.coffe.map((x) => {
                        if (x.kind === "drink") {
                            return <li key={x.id}>{x.name}: <span>£{x.price}</span>.</li>
                        }else{
                            return  ''
                        }
                    })}

                </ul>
            </div>
        </div>
    )

}

const StateToProps = (state) => {
    return {
        coffe: state.CoffeMangment.items,
        state:state.CoffeMangment
    }
}

export default connect(StateToProps)(CoffeViewPrice);


