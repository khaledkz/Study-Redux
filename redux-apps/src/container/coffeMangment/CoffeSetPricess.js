import React, { Component } from 'react';
import '../css/coffeMangment.css';
import CoffeDb from '../../redux/actions/coffe/setPrice';
// import { connect } from 'react-redux';

class CoffeSetPricess extends Component {

    constructor() {
        super();
        this.state={
             items:[
                {id:'0',name:'Americano',price:0},{id:'1',name:'AffogatoCoffe',price:0},{id:'2',name:'CoffeBicerin',price:0},
                {id:'3',name:'CoffeBreve',price:0},{id:'4',name:'CofeBombon',price:0},{id:'5',name:'CofeAuLait',price:0},
                {id:'6',name:'CafeLatte',price:0},{id:'7',name:'AngelCake',price:0},{id:'8',name:'TorateCake',price:0},
                {id:'9',name:'AppleCake',price:0},{id:'10',name:'ApplesauceCake',price:0},{id:'11',name:'AranygaluskaCake',price:0}
                ,{id:'12',name:'AvocadoCake',price:0},{id:'13',name:'BabkaCake',price:0},{id:'14',name:'DrinkTea',price:0},
                {id:'15',name:'DrinkShisha',price:0},{id:'16',name:'DrinkMilk',price:0},{id:'17',name:'DrinkJuice',price:0},
                {id:'18',name:'DrinkSahlab',price:0},{id:'19',name:'DrinkCola',price:0},{id:'20',name:'DrinkKoktail',price:0}    
             ]
        }

    }

    updateItem=(e)=>{
        let name=e.target.name;
        let myId=e.target.id;
        let price=e.target.value;
        let kind=e.target.className;
    

         this.setState({
             items:this.state.items.map((x)=>{
                if(x.id===myId){
                        return {id:myId,price:price,name,kind};
                }else{
                    return x
                }
         })
         })

         
    }

    submitPricess=()=>{
        return CoffeDb.updatePricess(this.state.items);
    }

    render() {

 

        return (
            <div className="coffe-pricess">
                <p>Set Price</p>


                <h1>Add Coffe</h1>
                     <div className="coffe-items">
                        <div>
                            <p>Americano</p>
                            <input onChange={this.updateItem} name="Americano" type="number" className="coffe" placeholder="£" id="0" />
                        </div>

                        <div>
                            <p>Affogato</p>
                            <input onChange={this.updateItem} type="number" name="AffogatoCoffe" className="coffe" placeholder="£" id="1" />
                        </div>

                        <div>
                            <p>Bicerin</p>
                            <input onChange={this.updateItem} type="number" name="CoffeBicerin" className="coffe" placeholder="£" id="2" />
                        </div>

                        <div>
                            <p>Breve</p>
                            <input onChange={this.updateItem} type="number" name="CoffeBreve" className="coffe" placeholder="£" id="3" />
                        </div>

                        <div>
                            <p>Café Bombón</p>
                            <input onChange={this.updateItem} type="number" name="CofeBombon" className="coffe" placeholder="£" id="4" />
                        </div>

                        <div>
                            <p>Café au lait</p>
                            <input onChange={this.updateItem} type="number" name="CofeAuLait" className="coffe" placeholder="£" id="5" />
                        </div>

                        <div>
                            <p>Café Latte</p>
                            <input onChange={this.updateItem} type="number" name="CafeLatte" className="coffe" placeholder="£" id="6" />
                        </div>

                    </div>
                   
                    <h1>Add Cake</h1>

                    <div className="coffe-items">
                        <div>
                            <p>Angel cake</p>
                            <input onChange={this.updateItem} name="AngelCake" className="cake" type="number" placeholder="£" id="7" />
                        </div>

                        <div>
                            <p>Torate</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="TorateCake" placeholder="£" id="8" />
                        </div>

                        <div>
                            <p>Apple cake</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="AppleCake" placeholder="£" id="9" />
                        </div>

                        <div>
                            <p>Applesauce</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="ApplesauceCake" placeholder="£" id="10" />
                        </div>

                        <div>
                            <p>Aranygaluska	</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="AranygaluskaCake" placeholder="£" id="11" />
                        </div>

                        <div>
                            <p>Avocado cake</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="AvocadoCake" placeholder="£" id="12" />
                        </div>

                        <div>
                            <p>Babka</p>
                            <input onChange={this.updateItem} type="number" className="cake" name="BabkaCake" placeholder="£" id="13" />
                        </div>

                    </div>



                    
                
                    <h1>Add Drink</h1>

                    <div className="coffe-items">
                        <div>
                            <p>Tea</p>
                            <input onChange={this.updateItem} type="number" name="DrinkTea" className="drink" placeholder="£" id="14" />
                        </div>

                        <div>
                            <p>Shisha</p>
                            <input onChange={this.updateItem} type="number" name="DrinkShisha" className="drink" placeholder="£" id="15" />
                        </div>

                        <div>
                            <p>Milk</p>
                            <input onChange={this.updateItem} type="number" name="DrinkMilk" className="drink" placeholder="£" id="16" />
                        </div>

                        <div>
                            <p>Juice</p>
                            <input onChange={this.updateItem} type="number" name="DrinkJuice" className="drink" placeholder="£" id="17" />
                        </div>

                        <div>
                            <p>Sahlab</p>
                            <input onChange={this.updateItem} type="number" name="DrinkSahlab" className="drink" placeholder="£" id="18" />
                        </div>

                        <div> 
                            <p>Cola</p>
                            <input onChange={this.updateItem} type="number" name="DrinkCola" className="drink" placeholder="£" id="19" />
                        </div>

                        <div>
                            <p>koktail</p>
                            <input onChange={this.updateItem} type="number" name="DrinkKoktail" className="drink" placeholder="£" id="20" />
                        </div>

                    </div>
                    <button onClick={this.submitPricess}>Update</button>
 
            </div>)
    }

}

export default CoffeSetPricess;

// function stateToProps(state) {
//     return {
//         CoffeMangment: state.CoffeMangment
//     }
// }
// export default connect(stateToProps)(CoffeSetPricess);