import store from '../../store/store'

const calculatorAction ={
    
    operator:(e)=>{
        //   let num=document.getElementById('calcValue').value;
          let selectedOption=e.target.value;
         return store.dispatch({type:selectedOption});

    },
    number:(e)=>{
            let number=e.target.value;
            return store.dispatch({type:'number',number});

    },
    clear:()=>{
        return store.dispatch({type:'c'})
    }
   

};

export default calculatorAction;