
const Counter=(state=0,action)=>{
    
    switch(action.type){
        case Incremant:
            return state+1;
         case Decrement:
            return state-1;
         default:
            return state;
    }
    
}


//we improt create sore from redux
const {createStore}=redux;

// we create our store and we but the counter as reducer for out store
const store = createStore(Counter)

//store.getState() built in function return the value of state;
console.log(store.getState());
//the result will be 0 because we initalize the state by 0

//store.dispatch is the way we update the state we only to dispatch an object contain the action type
//then reducer will check the dispatch and update the state
store.dispatch({type:'Incremant'});

console.log(store.getState());
//the result will be 0 / 1 

// this function will render state to html page will show the value of state inside html body but we need to call it inside subscribe
const render = ()=>{
 document.body.innerHTML=store.getState();
}

//subscibe will run render function once we update the state
store.subscribe(render);

//we call render one time to render the inital state
render()

//we run this function to dispatch an incremant action each time we click to body
document.addEventListener('click',()=>{
   store.dispatch({type:'Incremant'}); 
})


