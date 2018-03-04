import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/recipte.css'

class Recipte extends Component {

    constructor(){
        super();
        this.state={
            total:0
        }
    }
    componentDidMount(){
        let total=0;

        let orders=this.props.orders;
        let items = this.props.items;

        if (this.props.orders.length > 0) {
            orders.map((order)=>{
                items.map((item)=>{
                    if(item.id===order.id){
                        total=total+(order.orderQuantitey*item.price)
                    }
                });
            })
        }
        this.setState({
            total:total
        })
     }

    render() {

         if (this.props.orders.length > 0) {
            return (<div>
                <h1>Recipte</h1>
                <div>
                    {
                        this.props.orders.map((x) => {
                            return (
                                <div>
                                    <p key={x.id}>{x.name}x{x.orderQuantitey}.</p>
                                </div>
                            )
                        })}
                <p>Total:£{this.state.total}</p>

                </div>
            </div>
            )
        } else {
            return (
            <div className="emptyRecipte">
                <p>"Life is short Enjoy Your Coffe"</p>
            </div>
            )
        }
    }



}

let stateToProps = (state) => {
    return {
        items: state.CoffeMangment.items,
        orders: state.CoffeMangment.orders

    }
}

export default connect(stateToProps)(Recipte)


