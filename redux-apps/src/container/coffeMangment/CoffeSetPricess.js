import React, { Component } from 'react';
import '../css/coffeMangment.css';
import CoffeDb from '../../redux/actions/coffe/setPrice';
import { connect } from 'react-redux';

class CoffeSetPricess extends Component {

    render() {
        console.log(this.props.CoffeMangment);

        return (
            <div className="coffe-pricess">
                <p>Coffe Set Pricess</p>


                <h1>Coffe List Pricess</h1>

                <div className="coffe-items">
                    <div>
                        <p>Americano</p>
                        <input onChange={CoffeDb.itemUpdatePrice} name="Americano" type="number" kind="coffe" placeholder="£" id="0" />
                    </div>

                    <div>
                        <p>Affogato</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="Affogato coffe" kind="coffe" placeholder="£" id="1" />
                    </div>

                    <div>
                        <p>Bicerin</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="Bicerin" kind="coffe" placeholder="£" id="2" />
                    </div>

                    <div>
                        <p>Breve</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="Breve" kind="coffe" placeholder="£" id="3" />
                    </div>

                    <div>
                        <p>Café Bombón</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="cofe Bombon" kind="coffe" placeholder="£" id="4" />
                    </div>

                    <div>
                        <p>Café au lait</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="cofe au lait" kind="coffe" placeholder="£" id="5" />
                    </div>

                    <div>
                        <p>Café Latte</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" name="cafe latte" kind="coffe" placeholder="£" id="6" />
                    </div>

                </div>




                <h1>Cake List Pricess</h1>

                <div className="coffe-items"> 
                    <div>
                        <p>Angel cake</p>
                        <input onChange={CoffeDb.itemUpdatePrice} name="Angel cake" kind="cake" type="number" placeholder="£" id="7" />
                    </div>

                    <div>
                        <p>Torate</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake" name="Torate" placeholder="£" id="8" />
                    </div>

                    <div>
                        <p>Apple cake</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake"  name="Apple cake" placeholder="£" id="9" />
                    </div>

                    <div>
                        <p>Applesauce</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake"  name="Applesauce" placeholder="£" id="10" />
                    </div>

                    <div>
                        <p>Aranygaluska	</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake"  name="Aranygaluska" placeholder="£" id="11" />
                    </div>

                    <div>
                        <p>Avocado cake</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake"  name="Avocado cake" placeholder="£" id="12" />
                    </div>

                    <div>
                        <p>Babka</p>
                        <input onChange={CoffeDb.itemUpdatePrice} type="number" kind="cake"  name="Babka" placeholder="£" id="13" />
                    </div>

                </div>




                <h1>Drink List Pricess</h1>

                <div className="coffe-items">
                    <div>
                        <p>Tea</p>
                        <input type="number" name="Tea" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="14" />
                    </div>

                    <div>
                        <p>Shisha</p>
                        <input type="number" name="Shisha" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="15" />
                    </div>

                    <div>
                        <p>Milk</p>
                        <input type="number" name="Milk" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="16" />
                    </div>

                    <div>
                        <p>Juice</p>
                        <input type="number" name="Juice" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="17" />
                    </div>

                    <div>
                        <p>Sahlab</p>
                        <input type="number" name="Sahlab" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="18" />
                    </div>

                    <div>
                        <p>Cola</p>
                        <input type="number" name="Cola" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="19" />
                    </div>

                    <div>
                        <p>koktail</p>
                        <input type="number" name="koktail" kind="drink" onChange={CoffeDb.itemUpdatePrice} placeholder="£" id="20" />
                    </div>

                </div>

            </div>)
    }

}

function stateToProps(state) {
    return {
        CoffeMangment: state.CoffeMangment
    }
}
export default connect(stateToProps)(CoffeSetPricess);