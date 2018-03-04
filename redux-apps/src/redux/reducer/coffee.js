import initalizePrice from '../store/initalizePrices';

export default function (state = initalizePrice, action) {

    
    // const checkItemArr = () =>{
    //     return [...state,{ name: action.itemName, price: action.itemPrice}];
    // }
    
    const checkItemObj = () => {

        return state.map((x) => {
            if (x.id === action.id) {
                console.log(action.id)
                return Object.assign({}, x, { name: action.itemName, price: action.itemPrice, kind: action.kind })
            } else {
                return x;
            }
        })
    
    }

    switch (action.type) {

        case 'setItemPrice':

                return checkItemObj()
           


        default:
            return state;
    }

}