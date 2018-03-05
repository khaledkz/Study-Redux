import initalizePrice from '../store/initalizePrices';

export default function (state = {items:initalizePrice,orders:{}}, action) {

    switch (action.type) {
//
        case 'updatePrice':
                 return  Object.assign({},{items:state.items},{items:action.items})
        case 'updateOrder':
                 return Object.assign({},{items:state.items},{orders:action.orders})
        default:
            return state;
    }

}