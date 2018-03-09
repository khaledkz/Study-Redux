export default function(state=0,action){

    switch (action.type){
 
        case 'incremant':
        return state+1;
 
        case 'decremant':
        return state-1;

        case 'dublicate':
        return state*2;

        case 'reset':
        return 0;

        default:
        return state;
     }
}
 