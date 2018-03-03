import React ,{Component} from 'react';
import '../css/coffeMangment.css';
import {Link} from 'react-router-dom';
 
class ReduxCoffeMangment extends Component{
    render(){
        return(

        <div className="coffee-mangment">
            
            <p>Al Sham Coffee Mangment</p>

            <Link to="/redux-coffe-mangment/set-price">  Update Pricess </Link>
            <Link to="/redux-coffe-mangment/newOrder"> New Order  </Link>
            <div className="lastLink">
            <Link to="/redux-coffe-mangment/view-price" >  View Pricess </Link><br/>
            </div>
             
          </div>

    )
    }
}

export default ReduxCoffeMangment;