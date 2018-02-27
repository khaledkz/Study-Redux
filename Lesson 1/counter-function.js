
//1- state=0 it's undefine shortcut; it's mean if state undefine assigned it to 0
// Counter function is the reducer will check the type of the action and then it will return an updated state
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

