import store from '../../store/store'

let setPrice={
     
    updatePricess:(e)=>{
              return store.dispatch({type:'updatePrice',items:e})
    },
    updateOrder:(e)=>{
                return store.dispatch({type:'updateOrder',orders:e})
    }
    
};

export default setPrice;