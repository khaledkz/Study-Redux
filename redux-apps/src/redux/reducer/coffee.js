
import initalizePrice from '../store/initalizePrices';

export default function(state=initalizePrice,action){

    switch(action.type){
        
        case 'setItemPrice':
                return   state.map((x)=>{
                     if(x.id===action.id){
                         console.log(action.id)
                         return Object.assign({},x,{name:action.itemName ,price:action.itemPrice})
                    }else{
                        return x
                    }
                }) 
           


        default:
        return state;
    }
    
 }