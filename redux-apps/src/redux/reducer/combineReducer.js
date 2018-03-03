 import { combineReducers } from 'redux'

import ReducerOne from './reducerOne';
import ReducerTwo from './reducerTwo';
import counter from './counter';
import calculator from './calculator';
export default combineReducers ({
    flats:ReducerOne,
    age:ReducerTwo,
    counter,
    calculator
}
)