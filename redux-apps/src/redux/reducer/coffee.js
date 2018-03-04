import initalizePrice from '../store/initalizePrices';

export default function (state = {items:initalizePrice}, action) {
    
    const checkItemObj = () => {

        return state.map((x) => {
            if (x.id === action.id) {
                 return Object.assign({}, x, { name: action.itemName, price: action.itemPrice, kind: action.kind })
            } else {
                return x;
            }
        })
   }

    switch (action.type) {

        case 'setItemPrice':
                return checkItemObj()

        case 'updatePrice':
                    console.log(action.items)
                return  Object.assign({},state.items,{items:action.items})
           
        default:
            return state;
    }

}