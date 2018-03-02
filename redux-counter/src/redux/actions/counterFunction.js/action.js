 import store from '../../store/store'

 const CounterActions={
    Incremant:()=>{
        store.dispatch({type:'incremant'});
    },
    Decremant:()=>{
        store.dispatch({type:'decremant'});
    },
    dublicate:()=>{
        store.dispatch({type:'dunlicate'});
    },
    reset:()=>{
        store.dispatch({type:'reset'})
    }
    

}

export default CounterActions;