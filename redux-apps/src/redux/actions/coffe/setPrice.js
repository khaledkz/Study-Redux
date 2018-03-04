import store from '../../store/store'



let setOrder=()=>{
 
    return ''
//    return store.dispatch({type:'total',CoffeAmericano,AffogatoCoffe,CoffeBicerin,CoffeBreve,CofeBombon,CofeAuLait,
//     CafeLatte,AngelCake,TorateCake,AppleCake,ApplesauceCake,AranygaluskaCake,AvocadoCake,BabkaCake,
//     DrinkTea,DrinkShisha,DrinkMilk,DrinkJuice,DrinkSahlab,DrinkCola,DrinkKoktail
// })
}

let itemPrice=(e)=>{
    return store.dispatch({type:'setItemPrice',id:e.target.id,itemName:e.target.name,itemPrice:e.target.value, kind:e.target.className})
 }

let setPrice={
    itemUpdatePrice:(e)=>{
            return itemPrice(e);
    },
    itemSetTotal:(e)=>{
        return ''
    },
    updatePricess:(e)=>{
              return store.dispatch({type:'updatePrice',items:e})
    }
    
};

export default setPrice;