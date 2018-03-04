import store from '../../store/store'



let setOrder=()=>{
let CoffeAmericano =document.getElementById('0').value;
let AffogatoCoffe =document.getElementById('1').value;
let CoffeBicerin =document.getElementById('2').value;
let CoffeBreve =document.getElementById('3').value;
let CofeBombon =document.getElementById('4').value;
let CofeAuLait =document.getElementById('5').value;
let CafeLatte =document.getElementById('6').value;

let AngelCake =document.getElementById('7').value;
let TorateCake =document.getElementById('8').value;
let AppleCake =document.getElementById('9').value;
let ApplesauceCake =document.getElementById('10').value;
let AranygaluskaCake =document.getElementById('11').value;
let AvocadoCake =document.getElementById('12').value;
let BabkaCake =document.getElementById('13').value;

let DrinkTea =document.getElementById('14').value;
let DrinkShisha =document.getElementById('15').value;
let DrinkMilk =document.getElementById('16').value;
let DrinkJuice =document.getElementById('17').value;
let DrinkSahlab =document.getElementById('18').value;
let DrinkCola =document.getElementById('19').value;
let DrinkKoktail =document.getElementById('20').value;

   return store.dispatch({type:'total',CoffeAmericano,AffogatoCoffe,CoffeBicerin,CoffeBreve,CofeBombon,CofeAuLait,
    CafeLatte,AngelCake,TorateCake,AppleCake,ApplesauceCake,AranygaluskaCake,AvocadoCake,BabkaCake,
    DrinkTea,DrinkShisha,DrinkMilk,DrinkJuice,DrinkSahlab,DrinkCola,DrinkKoktail
})
}

let itemPrice=(e)=>{
    return store.dispatch({type:'setItemPrice',id:e.target.id,itemName:e.target.name,itemPrice:e.target.value, kind:e.target.className})
 }

let setPrice={
    itemUpdatePrice:(e)=>{
            return itemPrice(e);
    },
    itemSetTotal:(e)=>{
        return console.log(e.target);
    }
    
};

export default setPrice;