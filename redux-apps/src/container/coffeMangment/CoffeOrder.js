import React, { Component } from 'react';
import '../css/coffeMangment.css'
import CoffeDb from '../../redux/actions/coffe/setPrice';
 
class CoffeOrder extends Component {

    constructor() {
        super();
        this.state={
             orderd:[               
                {id: "0", name: "Americano" ,kind:'coffe',orderQuantitey:0},
                {id: "1", name: "Affogato coffe", kind:'coffe',orderQuantitey:0},
                {id: "2", name: "Bicerin" ,kind:'coffe',orderQuantitey:0},
                {id: "3", name: "Breve", kind:'coffe',orderQuantitey:0},
                {id: "4", name: "cofe Bombon", kind:'coffe',orderQuantitey:0},
                {id: "5", name: "cofe au lait",  kind:'coffe',orderQuantitey:0},
                {id: "6", name: "cafe latte", kind:'coffe',orderQuantitey:0},
                {id: "7", name: "Angel cake",  kind:'cake',orderQuantitey:0},
                {id: "8", name: "Torate" ,kind:'cake',orderQuantitey:0},
                {id: "9", name: "Apple cake", kind:'cake',orderQuantitey:0},
                {id: "10", name: "Applesauce",  kind:'cake',orderQuantitey:0},
                {id: "11", name: "Aranygaluska",  kind:'cake',orderQuantitey:0},
                {id: "12", name: "Avocado cake", kind:'cake',orderQuantitey:0},
                {id: "13", name: "Babka" ,kind:'cake',orderQuantitey:0},
                {id: "14", name: "Tea",  kind:'drink',orderQuantitey:0},
                {id: "15", name: "Shisha", kind:'drink',orderQuantitey:0},
                {id: "16", name: "Milk",  kind:'drink',orderQuantitey:0},
                {id: "17", name: "Juice", kind:'drink',orderQuantitey:0},
                {id: "18", name: "Sahlab", kind:'drink',orderQuantitey:0},
                {id: "19", name: "Cola",  kind:'drink',orderQuantitey:0},
                {id: "20", name: "koktail", kind:'drink',orderQuantitey:0}
                 ],              
        }
    }

    newOrder=(e)=>{
        let name=e.target.name;
        let id=e.target.id;
        let orderQuantitey=e.target.value;
        let kind=e.target.className;

        this.setState({
            orderd:this.state.orderd.map((x)=>{
                if(x.id===id){
                    return {name,id,orderQuantitey,kind};
                }else{return x};
            })
        });

    }

    submitOrder=()=>{
        let allOrderdList=[];
        let orderdSubmit=[...this.state.orderd]
        orderdSubmit.map((x)=>{
             if(x.orderQuantitey>0){
                return allOrderdList.push(x);
            }

        })
        return CoffeDb.updateOrder(allOrderdList);

    }

    render() {

 

        return (
            <div className="coffe-pricess">
                <p>New Order</p>


                <h1>Add Coffe</h1>
                     <div className="coffe-items">
                        <div>
                            <p>Americano</p>
                            <input onChange={this.newOrder} name="Americano" type="number" className="coffe" placeholder="********" id="0" />
                        </div>

                        <div>
                            <p>Affogato</p>
                            <input onChange={this.newOrder} type="number" name="AffogatoCoffe" className="coffe" placeholder="********" id="1" />
                        </div>

                        <div>
                            <p>Bicerin</p>
                            <input onChange={this.newOrder} type="number" name="CoffeBicerin" className="coffe" placeholder="********" id="2" />
                        </div>

                        <div>
                            <p>Breve</p>
                            <input onChange={this.newOrder} type="number" name="CoffeBreve" className="coffe" placeholder="********" id="3" />
                        </div>

                        <div>
                            <p>Café Bombón</p>
                            <input onChange={this.newOrder} type="number" name="CofeBombon" className="coffe" placeholder="********" id="4" />
                        </div>

                        <div>
                            <p>Café au lait</p>
                            <input onChange={this.newOrder} type="number" name="CofeAuLait" className="coffe" placeholder="********" id="5" />
                        </div>

                        <div>
                            <p>Café Latte</p>
                            <input onChange={this.newOrder} type="number" name="CafeLatte" className="coffe" placeholder="********" id="6" />
                        </div>

                    </div>
                   
                    <h1>Add Cake</h1>

                    <div className="coffe-items">
                        <div>
                            <p>Angel cake</p>
                            <input onChange={this.newOrder} name="AngelCake" className="cake" type="number" placeholder="********" id="7" />
                        </div>

                        <div>
                            <p>Torate</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="TorateCake" placeholder="********" id="8" />
                        </div>

                        <div>
                            <p>Apple cake</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="AppleCake" placeholder="********" id="9" />
                        </div>

                        <div>
                            <p>Applesauce</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="ApplesauceCake" placeholder="********" id="10" />
                        </div>

                        <div>
                            <p>Aranygaluska	</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="AranygaluskaCake" placeholder="********" id="11" />
                        </div>

                        <div>
                            <p>Avocado cake</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="AvocadoCake" placeholder="********" id="12" />
                        </div>

                        <div>
                            <p>Babka</p>
                            <input onChange={this.newOrder} type="number" className="cake" name="BabkaCake" placeholder="********" id="13" />
                        </div>

                    </div>



                    
                
                    <h1>Add Drink</h1>

                    <div className="coffe-items">
                        <div>
                            <p>Tea</p>
                            <input onChange={this.newOrder} type="number" name="DrinkTea" className="drink" placeholder="********" id="14" />
                        </div>

                        <div>
                            <p>Shisha</p>
                            <input onChange={this.newOrder} type="number" name="DrinkShisha" className="drink" placeholder="********" id="15" />
                        </div>

                        <div>
                            <p>Milk</p>
                            <input onChange={this.newOrder} type="number" name="DrinkMilk" className="drink" placeholder="********" id="16" />
                        </div>

                        <div>
                            <p>Juice</p>
                            <input onChange={this.newOrder} type="number" name="DrinkJuice" className="drink" placeholder="********" id="17" />
                        </div>

                        <div>
                            <p>Sahlab</p>
                            <input onChange={this.newOrder} type="number" name="DrinkSahlab" className="drink" placeholder="********" id="18" />
                        </div>

                        <div> 
                            <p>Cola</p>
                            <input onChange={this.newOrder} type="number" name="DrinkCola" className="drink" placeholder="********" id="19" />
                        </div>

                        <div>
                            <p>koktail</p>
                            <input onChange={this.newOrder} type="number" name="DrinkKoktail" className="drink" placeholder="********" id="20" />
                        </div>

                    </div>
                    <button type="button" onClick={this.submitOrder}>Submit</button>
 
            </div>)
    }

}

export default CoffeOrder;