import store from '../../store/store'

let setPrice={
    itemUpdatePrice:(e)=>{
          return store.dispatch({type:'setItemPrice',id:e.target.id,itemName:e.target.name,itemPrice:e.target.value})
    },
};

export default setPrice;